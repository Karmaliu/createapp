import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory' //路径历史
import Counter from './pages/counter/page';
import App from './App';
import Layouts from './layouts';

const history = createBrowserHistory();

function notFound() {
    return (
        <div>404</div>
    )
}
const Routes = () => {
    return (
        <Router history={history}>
            <div>
                <Layouts />
                <Switch>

                    <Route exact path="/" component={App} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/404" component={notFound} />
                </Switch>

            </div>
        </Router>


    )
}

export default Routes;