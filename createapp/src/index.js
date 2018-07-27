import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './router';
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory"
//react-router-dom 集成redux
import { ConnectedRouter } from "react-router-redux";

const history = createHistory()
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
