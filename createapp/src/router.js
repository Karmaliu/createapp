import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Counter from './pages/counter/page';
import App from './App';
import Layouts from './layouts';
function notFound() {
    return (
        <div>404</div>
    )
}
const Routes = () => {
    return (

        <BrowserRouter>
            <div>
                <Layouts />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/404" component={notFound} />
                </Switch>

            </div>
        </BrowserRouter >


    )
}

export default Routes;