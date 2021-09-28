import { connect } from 'react-redux';
//!2. since that func (from 1.) is comented, below action import is also not necessary
// import { addToCart } from 'service/actions/actions';
import Header from 'components/Header';

const mapStateToProps = (state: any) => ({
  // all global props
  reduxData: state,
});

const mapDispatchToProps = (dispatch: any) => ({
  //!1. since mapDispatchToProps is not  needed in header compo . so commenting below func.
  //   addToCartHandler: (data: any) => dispatch(addToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

//? header is only receiving props> reduxDATA , not the handler
