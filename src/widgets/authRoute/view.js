import React from 'react';
import { Route, Redirect } from 'react-router';

const AuthRoute = ({ component: Component, isAuthenticated, isLoading, loginPath, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated && !isLoading ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: loginPath,
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

AuthRoute.defaultProps = {
    component: <p />,
    loginPath: '/login',
    isAuthenticated: false,
    isLoading: false,
};

export default AuthRoute;
