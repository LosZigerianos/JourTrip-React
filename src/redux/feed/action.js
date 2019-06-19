import * as types from './types';
import * as api from '../../webservices';
import _ from 'lodash';

function updateFetching(value) {
    return {
        type: types.FEED_UPDATE_FETCHING,
        value,
    };
}

function updateFeedList(feedList) {
    return {
        type: types.FEED_UPDATE_LIST,
        value: feedList,
    };
}

export function initFeedList() {
    return function(dispatch, getState) {
        dispatch(updateFeedList([]));
        dispatch(fetchFeedList());
    };
}

function fetchFeedList() {
    return function(dispatch, getState) {
        const userId = _.get(getState(), 'auth.user._id', '');
        if (!userId) {
            return;
        }

        dispatch(updateFetching(true));

        api.fetchFeedListByUser(userId)
            .then(response => {
                const list = response.data.data;
                dispatch(updateFeedList(list));
            })
            .catch(err => {
                console.log('fetchFeedList err: ', err);
            })
            .finally(() => {
                dispatch(updateFetching(false));
            });
    };
}
