const LOGIN = 'action/LOGIN';

const initialState = {
    value: [],
};

export const getUserLoginAction = (username, password) => {
    return {
        type: LOGIN,
        payload: {
            username,
            password,
        },
    };
};

export default function handleUserValueReducer(state = initialState, action) {
    switch (action) {
        case LOGIN: {
            const { payload } = action;
            const newState = { ...state };
            newState.username = payload.username;
            newState.password = payload.password;
            newState.value = { ...state.value, payload };
            return newState;
        }
        default:
            return state;
    }
}
