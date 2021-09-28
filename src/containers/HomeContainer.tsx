import { connect } from 'react-redux';
import { addToCart } from 'service/actions/actions';
import Home from 'components/Home';

const mapStateToProps = (state: any) => ({
  // all global props
  reduxData: state,
});

const mapDispatchToProps = (dispatch: any) => ({
  addToCartHandler: (data: any) => dispatch(addToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
