import { connect } from 'react-redux';
import { addToCart, removeToCart } from 'service/actions/actions';
import Home from 'components/Home';

const mapStateToProps = (state: any) => ({
  // all global props
  reduxData: state,
});

const mapDispatchToProps = (dispatch: any) => ({
  // actions handler methods
  addToCartHandler: (data: any) => dispatch(addToCart(data)),

  // actions handler methods
  removeToCartHandler: (data: any) => dispatch(removeToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
