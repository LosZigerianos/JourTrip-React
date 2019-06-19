import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { configureAxios } from './webservices';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import history from './config/historyRouter';

class App extends Component {
    constructor() {
        super();
        configureAxios();
    }

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
