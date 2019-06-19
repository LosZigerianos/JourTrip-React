import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthRoute from './widgets/authRoute';

import Login from './sections/login';
import Feed from './sections/feed';

const Routes = () => (
    <Switch>
        <AuthRoute exact path="/" component={Feed} />
        <Route path="/login" component={Login} />
    </Switch>
);

export default Routes;

export const routes = {
    feed: () => '/',
    login: () => '/login',
};
