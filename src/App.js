import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { adminRoutes } from './routes'
import Frame from './components/Frame'

class App extends Component {
    render() {
        return (
            <Frame>
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
            </Frame>

        )
    }
}


export default App