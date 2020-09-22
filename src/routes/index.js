import React from 'react';
import Home from '../containers/home'
import About from '../containers/about'

import {
    Switch,
    Route
} from 'react-router-dom'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
}, {
    path: '/about',
    name: 'About',
    component: About
}]

const createRotes = (routes) => {
    const _routes = routes.map(r => {
        return (
            <Route key={r.name} path={r.path} exact={r.exact} render={(props) => <r.component {...props}></r.component>}></Route>
        )
    })

    return (
        < Switch>
            {
                _routes
            }
        </Switch>
    )
}

export {
    routes,
    createRotes
}