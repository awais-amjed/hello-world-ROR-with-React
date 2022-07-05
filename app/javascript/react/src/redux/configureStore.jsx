import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import RandomGreetingReducer from './randomGreeting';

const rootReducer = combineReducers({
    randomGreeting: RandomGreetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
