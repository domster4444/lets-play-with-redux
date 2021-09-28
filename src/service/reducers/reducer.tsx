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
export default function cartItems(state = [], action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn('action received in reducer.js ____________', action);

      return [...state, { cartDATA: action.data }];
    default:
      return state;
  }
}
