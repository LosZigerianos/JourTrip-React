import { connect } from 'react-redux';
import View from './view';

const mapStateToProps = state => ({
    isLoading: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(View);
