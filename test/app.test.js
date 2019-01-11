import App from '../src/app';
import configureStore from '../src/store';
import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import $ from 'jQuery';
let store, app;
beforeEach(async () => {
	store = configureStore({});
	app = new App(store);
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
	store.subscribe(() => {
		app.render(store.getState());
	});
	await app.fetchList();
	app.initListener();
});

global.fetch = fetch;

test('plus click', () => {
	$("#plus").click();

	const count = document.querySelector("#counter").innerText;
	const listCount = document.querySelectorAll("li").length;
	expect({
		count,
		listCount
	}).toEqual({
		count: 1,
		listCount:1
	})
})

test('minus click', () => {
	$("#minus").click();
	const count = document.querySelector("#counter").innerText;
	const listCount = document.querySelectorAll("li").length;
	expect({
		count,
		listCount
	}).toEqual({
		count: 0,
		listCount: 0,
	})
})

test('plus and minus click test', () => {
	$("#plus").click();
	$("#plus").click();
	$("#minus").click();
	const count = document.querySelector("#counter").innerText;
	const listCount = document.querySelectorAll("li").length;
	expect({
		count,
		listCount
	}).toEqual({
		count: 1,
		listCount: 1,
	})
})

