import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './pages/counter/sagas';
import counterR from './pages/counter/reducers/index';


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// 合并reducer
const reducer = combineReducers({
    counter: counterR.counterReducer
})

export const store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension() : undefined,    // dev-tools
    applyMiddleware(sagaMiddleware)                 // 中间件，加载sagaMiddleware
)


// then run the saga
sagaMiddleware.run(mySaga);







