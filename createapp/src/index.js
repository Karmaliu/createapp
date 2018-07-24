import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './router';
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
