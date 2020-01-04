import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Popular from '../containers/Popular'
import Battle from '../containers/Battle'
import Result from '../containers/Result'
import NotFound from '../components/Errors/NotFound'

const appName = 'Github Battle App'

const Routes = () => (
    <Switch>
        <RouteWithTitle path="/" title="Popular Repositories" exact component={Popular} />
        <RouteWithTitle path="/battle" title="Start Battle" exact component={Battle} />
        <RouteWithTitle path="/battle/results" title="Battle Results" component={Result} />
        <Route component={NotFound} />
    </Switch>
)

const RouteWithTitle = ({ component: Component, title, ...rest }) => {
    title = title ? `${appName} - ${title}` : appName;
    return (
        <Route {...rest} render={props => <Component {...props} title={title} />} />
    )
}

export default Routes