import history from '../../config/historyRouter';
import { routes } from '../../Routes';
import * as types from './types';
import * as api from '../../webservices';

function updateFetching(value) {
    return {
        type: types.AUTH_UPDATE_FETCHING,
        value,
    };
}

function updateLoginError(value) {
    return {
        type: types.AUTH_UPDATE_LOGIN_ERROR,
        value,
    };
}

function updateUser(value) {
    return {
        type: types.AUTH_UPDATE_USER,
        value,
    };
}

function logout() {
    return {
        type: types.AUTH_LOGOUT,
    };
}

export function login(user) {
    // Redux thunk function
    return function(dispatch, getState) {
        if (!user) {
            return;
        }

        dispatch(updateLoginError(false));
        dispatch(updateFetching(true));

        api.login(user)
            .then(response => {
                // Get user data
                const user = response.data.metadata;
                const token = response.data.data;
                dispatch(updateUser({ ...user, token }));

                // Add token in axios for all request next
                api.configureToken(token);

                // fetching false
                dispatch(updateFetching(false));

                // redirect to Feed route
                history.push(routes.feed());
            })
            .catch(err => {
                // fetching false
                dispatch(updateFetching(false));

                // Error Response
                if (err.response) {
                    const { status: statusCode } = err.response;
                    if (statusCode === 401 || statusCode === 400) {
                        dispatch(updateLoginError(true));
                    }
                    return;
                }

                // Network Error
                alert('Network error');
            });
    };
}
