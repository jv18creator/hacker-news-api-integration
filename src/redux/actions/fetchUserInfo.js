import Axios from 'axios';
import { GET_SELECLTED_USER_INFO, SET_USER_ERROR } from '../types';

export const fetchUserInfo = (userName) => async (dispatch) => {
    let response;
    try {
        response = await Axios.get(
            `https://hacker-news.firebaseio.com/v0/user/${userName}.json?print=pretty`
        );

        dispatch({
            type: GET_SELECLTED_USER_INFO,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: SET_USER_ERROR,
            payload: error,
        });
    }
};
