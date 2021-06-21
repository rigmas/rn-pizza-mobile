export interface PizzaState {
  size: number;
  crust: number;
  totalValue: number;
  isLoading: boolean;
}

export enum PizzaTypes {
  INITIAL = 'INITAL',
  RESET_STATE = 'RESET_STATE',
  SET_PIZZA_SIZE = 'SET_PIZZA_SIZE',
}