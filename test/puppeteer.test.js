const puppeteer = require('puppeteer');
// const webpack = require('webpack');

const sleep = (fn, time) => {

	return new Promise((res, rej) => {
		setTimeout(async () => {
			await fn();
			res();
		}, time)
	})
}
test('puppeteer', async () => {
	const browser = await puppeteer.launch({
		headless: false,
	});

	const page = await browser.newPage();
	await page.goto('http://0.0.0.0:8080/');

	await page.waitForSelector("button");
	
	const length = await page.evaluate(`
		document.querySelectorAll("button").length;
	`);

	await page.waitFor("#plus");
	await page.click("#plus");

	await page.waitFor(() => document.querySelector("#counter").innerHTML);

	const text = await page.evaluate(`
	document.querySelector("#counter").innerHTML;
	`)

	console.log(text);
	expect(text).toEqual("1");
	await page.close();
	await browser.close();
	
	// expect(length).toEqual(2);

	

	// expect()
	
	//return sleep(async () => {
	//}, 5000);

}, 15000);