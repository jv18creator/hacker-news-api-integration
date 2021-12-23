import { GET_NEWEST_POST } from '../types';
import Axios from 'axios';

export const fetchNewestNews = () => async (dispatch) => {
    let response;
    try {
        response = await Axios.get(
            `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`
        );

        dispatch({
            type: GET_NEWEST_POST,
            payload: response.data,
        });
    } catch (error) {
        //todo handle error
    }
};
