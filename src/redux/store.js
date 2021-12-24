import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import newestNewsReducer from './reducers/newestNewsReducer';
import askStoriesReducer from './reducers/askStoriesReducer';
import storiesReducer from './reducers/storiesReducer';

const reducers = combineReducers({
    userReducer,
    newestNewsReducer,
    askStoriesReducer,
    storiesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
