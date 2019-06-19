import { connect } from 'react-redux';
import * as authActions from '../../redux/auth/action';
import View from './view';

const mapStateToProps = state => {
    return {
        isFetching: state.auth.isFetching,
        isLoginError: state.auth.isLoginError,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        login: user => {
            dispatch(authActions.login(user));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(View);
