const api = async () => {
	const response = await fetch("https://api.github.com/users/JaeYeopHan/repos");
	return response.json();
};

const PLUS = "PLUS";
const MINUS = "MINUS";
const FETCH_COMPLETE = "FETCH_COMPLETE";
const FETCH_FAIL = "FETCH_FAIL";

const createAction = type => payload => ({
	type,
	payload,
});

const plusAction = createAction(PLUS);
const minusAction = createAction(MINUS);
const fetchCompleteAction = createAction(FETCH_COMPLETE);
const fetchFailAction = createAction(FETCH_FAIL);


const INIT_STATE = {
	count: 0,
	list: [],
};

function counterReducer(state = INIT_STATE, action) {
	switch (action.type) {
		case PLUS:
			return {
				...state,
				count: state.count + 1,
			};
		case MINUS:
			return {
				...state,
				count: state.count - 1,
			};
		case FETCH_COMPLETE:
			const {list} = action.payload;
			const {count} = state;

			return {
				...state,
				list: list.slice(0, count),
			};
		default:
			return state;
	}
}

function createStore(reducer, state) {

	let currentState = reducer(state, {type: "@@init"});
	let listners = [];

	function getState() {
		return currentState;
	}

	function dispatch(action) {
		currentState = reducer(currentState, action);
		listners.forEach(l => l());
	}

	function subscribe(listner) {
		listners.push(listner);

		return () => {
			listners = listners.filter(l => l !== listner);
		}
	}

	return {
		dispatch,
		getState,
		subscribe
	}
}


const store = createStore(counterReducer, {count: 5, list: []});


document.getElementById("plus").addEventListener("click", async () => {
	store.dispatch(plusAction());

	const repos = await api();

	store.dispatch(fetchCompleteAction({
		list: repos
	}));
});

document.getElementById("minus").addEventListener("click", async () => {
	store.dispatch(minusAction());

	const repos = await api();

	store.dispatch(fetchCompleteAction({
		list: repos
	}));
});


function render(state) {
	const { count, list } = state;
	document.getElementById("counter").innerText = count;
	document.getElementById("repos").innerHTML = list.map(item => `<li><a href="${item.html_url}">${item.full_name}</a></li>`).join("");
}

const unlisten = store.subscribe(() => {
	render(store.getState());
});

(async () => {
	render(store.getState());

	const repos = await api();

	store.dispatch(fetchCompleteAction({
		list: repos
	}));
})();

// setTimeout(() => {
// 	unlisten();
// 	console.log('unsubscribe')
// }, 5000);
