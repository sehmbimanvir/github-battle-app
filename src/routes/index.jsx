import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Popular from '../containers/Popular'
import Battle from '../containers/Battle'
import Result from '../containers/Result'
import NotFound from '../components/Errors/NotFound'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Popular} />
        <Route path="/battle" exact component={Battle} />
        <Route path="/battle/results" component={Result} />
        <Route component={NotFound} />
    </Switch>
)

export default Routes