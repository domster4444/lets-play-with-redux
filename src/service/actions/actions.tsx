import { ADD_TO_CART, REMOVE_TO_CART } from 'service/constants';
// actions listed below of our application
export const addToCart: Function = (data: any) => {
  console.warn(
    'action just logged from action.js_________(add cart)____________',
    data
  );
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart: Function = (data: any) => {
  console.warn(
    'action just logged from action.js______(remove cart)__________'
  );
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
