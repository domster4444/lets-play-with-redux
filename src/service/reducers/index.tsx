import { combineReducers } from 'redux';
import cartItems from 'service/reducers/reducer';
//merge all reducers , in this root-reducer file
export default combineReducers({
  cartItems,
});
