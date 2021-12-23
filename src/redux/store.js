import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import newestNewsReducer from './reducers/newestNewsReducer';

const reducers = combineReducers({
    userReducer,
    newestNewsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
