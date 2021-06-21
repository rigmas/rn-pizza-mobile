import { Reducer } from 'redux';
import { PizzaState, PizzaTypes } from './types';

const initialState: PizzaState = {
  crust: 1,
  size: 0,
  totalValue: 0,
  isLoading: true
}

const PizzaReducer: Reducer<PizzaState> = (state = initialState, action) => {
  switch (action.type) {

    case PizzaTypes.INITIAL:
      return { ...state, isLoading: false}

    case PizzaTypes.RESET_STATE:
      return initialState;

    case PizzaTypes.SET_PIZZA_SIZE:
      return { ...state, ...action.payload };

      default:
        return state;
  }
}

export default PizzaReducer;