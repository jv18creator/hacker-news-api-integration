import { GET_USER_INFO, GET_SELECLTED_USER_INFO } from '../types';

const initialState = {
    userInfo: [],
    selectedUserInfo: {},
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        case GET_SELECLTED_USER_INFO:
            return {
                ...state,
                selectedUserInfo: action.payload,
            };

        default:
            return state;
    }
}
