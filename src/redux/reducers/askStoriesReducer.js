import { GET_ASK_STORIES, GET_SHOW_STORIES, GET_JOB_STORIES } from '../types';

const initialState = {
    askStoriesId: null,
    showStoriesId: null,
    jobStoriesId: null,
};

export default function askStoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ASK_STORIES:
            return {
                ...state,
                askStoriesId: action.payload,
            };
        case GET_SHOW_STORIES:
            return {
                ...state,
                showStoriesId: action.payload,
            };
        case GET_JOB_STORIES:
            return {
                ...state,
                jobStoriesId: action.payload,
            };
        default:
            return state;
    }
}
