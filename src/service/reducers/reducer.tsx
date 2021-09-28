// * storing only 1 item in store
// // constants
// import { ADD_TO_CART, REMOVE_TO_CART } from 'service/constants';

// const initialState = {
//   cardDATA: [],
// };
// //check action type and return data
// export default function cardItem(state = initialState, action: any) {
//   switch (action.type) {
//     case ADD_TO_CART:
//       console.warn('action received in reducer.js ____________', action);
//       return {
//         ...state,
//         cardDATA: action.data,
//       };
//     default:
//       return state;
//   }
// }

// **** store multipel array in store
// constants
import { ADD_TO_CART, REMOVE_TO_CART } from 'service/constants';
const initialState = {
  cartDATA: [],
};
//check action type and return data
export default function cartItems(state = initialState.cartDATA, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn(
        'action received in reducer.js _____(add to cart action)_______',
        action
      );

      return [...state, { cartDATA: action.data }];

    case REMOVE_TO_CART:
      console.warn(
        'action received in reducer.js _____(remove to cart action)_______',
        action
      );

      //? remove 1 item from state(intialState.cartDATA arry)
      state.pop();
      //?returning the state
      return [...state];
    default:
      return state;
  }
}
