import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { configureAxios, configureToken } from './webservices';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import history from './config/historyRouter';
import _ from 'lodash';

class App extends Component {
    constructor() {
        super();
        configureAxios();
        this._configureAxiosToken();
    }

    _configureAxiosToken = () => {
        const token = _.get(store.getState(), 'auth.user.token', '');
        if (token) {
            configureToken(token);
        }
    };

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Routes />
                </Router>
            </Provider>
        );
    }
}

export default App;
