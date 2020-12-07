import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './index.less'

import { mainRoutes } from './routes'

ReactDom.render(
    <Router>
        <Switch>
            <Route path="/admin" render={(routerProps) => {
                return <App {...routerProps} />
            }} />

            {
                mainRoutes.map(route => {
                    return <Route key={route.pathname} path={route.pathname} component={route.component} />
                })
            }
            <Redirect to="/admin" from="/" exact />
            <Redirect to="/404" />
        </Switch>
    </Router>,
    document.getElementById("root")
)