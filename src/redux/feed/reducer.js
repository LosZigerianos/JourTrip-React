import * as types from './types';

const initialState = {
    list: [],
    isFetching: false,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.FEED_UPDATE_FETCHING:
            return {
                ...state,
                isFetching: action.value,
            };

        case types.FEED_UPDATE_LIST:
            return {
                ...state,
                list: action.value,
            };

        default:
            return state;
    }
}
