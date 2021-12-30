import Axios from 'axios';
import { GET_NEWEST_COMMENTS } from '../types';

export const fetchComments = (id) => async (dispatch) => {
    let response;
    try {
        response = await Axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        );
        dispatch({
            type: GET_NEWEST_COMMENTS,
            payload: response.data,
        });
    } catch (error) {}
    return response;
};
