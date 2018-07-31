import React from 'react';
import { Link } from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import { Button } from 'antd';
const history = createHistory()

// Get the current location.
const location = history.location
const Header = () => {
    console.log(location)
    return (
        <div>
        <Button type="primary">Button</Button>
            <Link to="/">Home</Link>
            <Link to="counter">Counter</Link>
            <Link to="404">404</Link>
        </div>
    )
}

export default Header;