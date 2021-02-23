import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Board from '../Route/Board'
import Home from '../Route/Home'
import Notice from '../Route/Notice'
import Detail from './Detail'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notice" component={Notice} />
        <Route path='/board' component={Board} />
        <Route path='/detail' component={Detail} />
    </Switch>
)

const AppRouter = () => {
    return (
        <BrowserRouter basename="/">
            <Routes />
        </BrowserRouter>
    )
}

export default AppRouter