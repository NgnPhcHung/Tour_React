import LoginForm from '../../components/Modal/AccountBox/LoginForm';
import { connect } from 'react-redux';
import { getUserLoginAction } from '../../Actions/User/GetUserAction';

const mapStateToProps = (state) => {
    const { handleUserValueReducer } = state;
    const { value } = handleUserValueReducer;

    return {
        value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: function (username, password) {
            const action = getUserLoginAction(username, password);
            dispatch(action);
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
