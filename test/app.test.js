import App from '../src/app';
import configureStore from '../src/store';
import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import $ from 'jQuery';
let store, app;
beforeEach(() => {
	store = configureStore({});
	app = new App(store);
});

global.fetch = fetch;

test('app test', () => {
	return app.fetchList().then(() => {
		expect(store.getState().counter.list.length).toBeGreaterThan(0);
	})
});


test('plus click', () => {
	document.body.innerHTML = `
		<div>
			<h1 id="counter"></h1>
			<div>
				<button id="plus">+</button>
				<button id="minus">-</button>
			</div>
		</div>
		<ul id="repos">

		</ul>
	`;
	app.initListener();

	store.subscribe(() => {
		console.log(123)
		app.render(store.getState());
	})


	// this.store.dispatch(minusAction()); 

	// jest.mock('..');
	// store.dispatch.mockImplementation(cb => {
	// 	cb({});
	// });
	$("#plus").click();

	expect(document.getElementById("counter").innerText).toEqual(1);

})
