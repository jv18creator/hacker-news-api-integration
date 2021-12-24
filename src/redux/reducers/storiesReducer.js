import { GET_STORIES } from '../types';

const initialState = {
    stories: null,
};

export default function storiesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STORIES:
            return {
                ...state,
                stories: action.payload,
            };

        default:
            return state;
    }
}
