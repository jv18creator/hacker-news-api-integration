import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import newestNewsReducer from './reducers/newestNewsReducer';
import askStoriesReducer from './reducers/askStoriesReducer';
import storiesReducer from './reducers/storiesReducer';
import newCommentsReducer from './reducers/newCommentsReducer';

const reducers = combineReducers({
    userReducer,
    newestNewsReducer,
    askStoriesReducer,
    storiesReducer,
    newCommentsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
