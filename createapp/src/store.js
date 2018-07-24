import { createStore, combineReducers } from 'redux';
import counterR from './pages/counter/reducers/index';
const Reducer = combineReducers({
    counter: counterR.counterReducer
})
const visiValue = 0;

export const store = createStore(Reducer, visiValue);