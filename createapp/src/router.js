import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Counter from './pages/counter/page';
import App from './App';
import Layouts from './layouts';
import HigherOrder from './pages/higherorder';
function notFound() {
    return (
        <div>404</div>
    )
}
const Routes = () => {
    return (
        <Router>
            <div>
                <Layouts />
                <Switch>

                    <Route exact path="/" component={App} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/404" component={notFound} />
                    <Route path="/higherOrder" component={HigherOrder} />
                </Switch>

            </div>
        </Router>


    )
}

export default Routes;