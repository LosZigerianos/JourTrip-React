import { connect } from 'react-redux';
import * as feedActions from '../../redux/feed/action';
import View from './view';

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        list: state.feed.list,
        isFetching: state.feed.isFetching,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        initFeedList: () => {
            dispatch(feedActions.initFeedList());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(View);
