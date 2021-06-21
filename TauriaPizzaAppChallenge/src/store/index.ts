import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import PizzaReducer from './reducers/pizza';

const reducers = combineReducers({
  PizzaReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;
