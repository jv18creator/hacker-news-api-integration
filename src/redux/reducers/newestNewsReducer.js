import { GET_NEWEST_POST } from '../types';

const initialState = {
    newestPostsId: null,
};

export default function newestNewsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWEST_POST:
            return {
                ...state,
                newestPostsId: action.payload,
            };

        default:
            return state;
    }
}
