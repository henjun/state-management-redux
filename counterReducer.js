const PLUS = "PLUS";
const MINUS = "MINUS";

const createAction = type => payload => ({
	type,
	payload,
});

const plusAction = createAction(PLUS);
const minusAction = createAction(MINUS);


function counterReducer(state = 0, action) {
	switch (action.type) {
		case PLUS:
			return state + 1;
		case MINUS:
			return state - 1;
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


const store = createStore(counterReducer, 5);


document.getElementById("plus").addEventListener("click", () => {
	store.dispatch(plusAction())
});
document.getElementById("minus").addEventListener("click", () => {
	store.dispatch(minusAction())
});


function render(state) {
	document.getElementById("counter").innerText = state;
}

const unlisten = store.subscribe(() => {
	render(store.getState());
});

(() => {
	render(store.getState());
})();

setTimeout(() => {
	unlisten();
	console.log('unsubscribe')
}, 5000);
