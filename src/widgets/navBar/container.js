import { connect } from 'react-redux';
import * as authActions from '../../redux/auth/action';
import View from './view';

const mapDispatchToProps = (dispatch, props) => ({
    logout: () => {
        dispatch(authActions.logout());
    },
});

export default connect(
    null,
    mapDispatchToProps,
)(View);
