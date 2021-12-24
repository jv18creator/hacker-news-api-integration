import { GET_ASK_STORIES, GET_JOB_STORIES, GET_SHOW_STORIES } from '../types';
import Axios from 'axios';

export const fetchAskStories = () => async (dispatch) => {
    let response;
    try {
        response = await Axios.get(
            `https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`
        );

        dispatch({
            type: GET_ASK_STORIES,
            payload: response.data,
        });
    } catch (error) {
        //todo handle error
    }
    return response;
};

export const fetchShowStories = () => async (dispatch) => {
    let response;
    try {
        response = await Axios.get(
            `https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty`
        );

        dispatch({
            type: GET_SHOW_STORIES,
            payload: response.data,
        });
    } catch (error) {
        //todo handle error
    }
};

export const fetchJobStories = () => async (dispatch) => {
    let response;
    try {
        response = await Axios.get(
            `https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`
        );

        dispatch({
            type: GET_JOB_STORIES,
            payload: response.data,
        });
    } catch (error) {
        //todo handle error
    }
};
