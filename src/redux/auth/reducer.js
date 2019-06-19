import * as types from './types';

const initialState = {
    user: null, // tomar datos de locastorage, el token o el usuario guardado
    isAuthenticated: false,
    isFetching: false,
    isLoginError: false,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.AUTH_UPDATE_USER:
            return {
                ...state,
                user: action.value,
                isAuthenticated: !!action.value,
            };

        case types.AUTH_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value,
            };

        case types.AUTH_UPDATE_LOGIN_ERROR:
            return {
                ...state,
                isLoginError: action.value,
            };

        case types.AUTH_LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            };

        default:
            return state;
    }
}
