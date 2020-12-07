import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { adminRoutes } from './routes'

class App extends Component {
    render() {
        return (
            <>
                <Switch>
                    {
                        adminRoutes.map(route => {
                            return <Route
                                key={route.pathname}
                                exact={route.exact}
                                path={route.pathname}
                                component={route.component}
                                render={
                                    (routeProps) => {
                                        return <route.component {...routeProps} />
                                    }
                                }
                            />
                        })
                    }
                    <Redirect to={adminRoutes[0].pathname} from='/admin' exact />
                    <Redirect to='/404' />
                </Switch>

            </>
        )
    }
}


export default App