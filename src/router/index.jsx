import React from 'react';
import {ReactBrowser as Router, Switch ,Route } from 'react-router-dom';
import {Home} from '../components';
const index = () => {
    return (
        <>
        <Router>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
        </>
    );
}

export default index;
