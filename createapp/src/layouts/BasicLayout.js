import React from 'react';
// import Header from './Header';
import App from '../App';
import { Link } from 'react-router-dom'
import Counter from '../pages/counter/page';
import HigherOrder from '../pages/higherorder';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from 'antd';
// const { Concent } = Layout;
function NotFound() {
    return <div>1111</div>
}
export default (props) => {
    console.log(props)
    return (
        <Layout>
            <Link to="/home">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/404">404</Link>
            11111111111111
            <div>

                <Switch>
                    <Route path="/home/" component={App} />
                    <Route path="/counter" component={Counter} />
                </Switch>
                <Route path="/404" component={NotFound} />
            </div>


        </Layout>
    )
}

// <Route
// key={item.key}
// path={item.path}
// component={item.component}
// exact={item.exact}
// />



