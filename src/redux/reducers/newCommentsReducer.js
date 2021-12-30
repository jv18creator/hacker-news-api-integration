import { GET_NEWEST_COMMENTS, GET_TOP_STORIES } from '../types';

const initialState = {
    comments: null,
    topStories: null,
};

export default function newCommentsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWEST_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            };
        case GET_TOP_STORIES:
            return {
                ...state,
                topStories: action.payload,
            };

        default:
            return state;
    }
}
