import { createStore, combineReducers } from 'redux';
import counterR from './pages/counter/reducers/index';
//里面放入个个页面的reducer 和 state
const reducer = combineReducers({
    counter: counterR.counterReducer
})


export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());