import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../redux';

// constants
export const JOURTRIP_STATE = 'JOURTRIP_STATE';

// Persisting data using local storage
let initState = {};
const persistedState = localStorage.getItem(JOURTRIP_STATE);

// if persistedState is not empty then assign parsed persistedState to initState
if (persistedState) {
    initState = JSON.parse(persistedState);
}

// create store
const reducer = combineReducers(reducers);
export const store = createStore(reducer, initState, applyMiddleware(thunk));

// That method will trigger the function we provide every time there is any change to the application state.
store.subscribe(() => {
    localStorage.setItem(JOURTRIP_STATE, JSON.stringify(store.getState()));
});
