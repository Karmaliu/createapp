import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './pages/counter/sagas';
import counterR from './pages/counter/reducers/index';
import createHistory from "history/createBrowserHistory"
import { routerReducer, routerMiddleware } from "react-router-redux";
// import { fetchUser, fetchUser1 } from './pages/counter/sagas';
const history = createHistory()

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// 合并reducer
const reducer = combineReducers({
    //集成react-router
    router: routerReducer,
    counter: counterR.counterReducer
})

export const store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined,    // dev-tools
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),                 // 中间件，加载sagaMiddleware
)


// then run the saga
sagaMiddleware.run(mySaga);







