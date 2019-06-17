import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './sections/login';
import Feed from './sections/feed';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/login" component={Login} />
    </Switch>
);

export default Routes;

export const routes = {
    feed: () => '/',
    login: () => '/login',
};
