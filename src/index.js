import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './index.less'

import { mainRoutes } from './routes'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

ReactDom.render(
    // 本地化
    <LocaleProvider locale={zhCN}>
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
        </Router>
    </LocaleProvider>,
    document.getElementById("root")
)