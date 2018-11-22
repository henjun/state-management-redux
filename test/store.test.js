// const configureStore = require('../src/store');
import configureStore from '../src/store';

import {
	plusAction,
	minusAction,
	fetchCompleteAction,
} from '../src/reducers/counterReducer'


const expectedState = {
	counter: {
		count: 0,
		list: [],
	},
};

let store;
beforeEach(() => {
	store = configureStore({});
});

afterEach(() => {
});

test('store test', () => {
	const expectedState = {
		counter: {
			count: 0,
			list: [],
		},
	};
	expect(store.getState()).toEqual(expectedState);
});

test('plus test', () => {
	// Given
	const expectedPlusState = {
		counter: {
			count: 1,
			list: [],
		},
	};
	// When
	store.dispatch(plusAction());
	// Then
	expect(store.getState()).toEqual(expectedPlusState);
});

test("minus test", () => {
	// Given
	const receviedState = store.getState();
	const expectedMinusState = {
		counter: {
			count: 0,
			list: [],
		},
	};
	// When
	store.dispatch(minusAction());
	// Then
	expect(receviedState).toEqual(expectedMinusState);
});

