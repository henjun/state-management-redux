const puppeteer = require('puppeteer');
// const webpack = require('webpack');
let page, browser;

const sleep = (fn, time) => {
	return new Promise((res, rej) => {
		setTimeout(async () => {
			await fn();
			res();
		}, time)
	})
}
// 페이지 로딩이 정상적으로 되고 준비가 완료되는 시점을 공통적으로 설정 
beforeEach(async () => {
	browser = await puppeteer.launch({
		headless: false,
	});

	page = await browser.newPage();
	await page.goto('http://0.0.0.0:8080/');
	await page.waitFor(() => document.querySelector("#counter").innerHTML);
	await page.evaluate(() => document.querySelector("#repos").innerHTML = "waiting");
});

test('plus', async () => {
	await page.click("#plus");
	await page.waitFor(() => document.querySelector("#repos").innerHTML);

	const result = await page.evaluate(() => {
		return {
			count: document.querySelector("#counter").innerHTML,
			listCount: document.querySelectorAll("li").length
		}
	});

	expect(result).toEqual({
		count: "1",
		listCount:1
	})
}, 15000);

test('minus', async () => {
	await page.click("#minus");
	await page.waitFor(() => document.querySelector("#repos").innerHTML !== "waiting");

	const result = await page.evaluate(() => {
		return {
			count: document.querySelector("#counter").innerHTML,
			listCount: document.querySelectorAll("li").length
		}
	});

	expect(result).toEqual({
		count: "0",
		listCount:0
	})
}, 15000);


test('plus plus minus', async () => {
	await page.click("#plus");
	await page.click("#minus");
	await page.waitFor(() => document.querySelector("#repos").innerHTML !== "waiting");

	const result = await page.evaluate(() => {
		return {
			count: document.querySelector("#counter").innerHTML,
			listCount: document.querySelectorAll("li").length
		}
	});

	expect(result).toEqual({
		count: "0",
		listCount:0
	})
}, 15000);

afterEach(async () => {
	await page.close();
	await browser.close();
})