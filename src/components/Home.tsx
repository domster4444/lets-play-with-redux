import React from 'react';
import phoneImg from 'assets/phone.jpg';
const Home = (props: any) => {
  console.error('🏠 props received by home.js__________');
  console.error(props);

  const characterImg: Object = {
    height: '10rem',
  };
  const cardStyle: Object = {
    margin: '0.5rem',
    padding: '1rem',
    borderRadius: '2rem',
    width: '10rem',
    background: 'wheat',
    boxShadow: '0px 0px 10px 1px #555',
  };
  const cartBtnStyle: Object = {
    padding: '0.5rem 1rem',
    border: '1px solid black',
    borderRadius: '0.5rem',
    width: '10rem',
    background: 'white',
    cursor: 'pointer',
  };

  return (
    <React.Fragment>
      <div style={cardStyle}>
        <strong>
          <b>
            Gold Phone <i>Price</i>
          </b>
        </strong>

        <summary>price: NRP 1000</summary>
        <br />
        <img style={characterImg} src={phoneImg} alt="" />
        <button
          onClick={() => {
            props.addToCartHandler({ price: 1000, name: 'iphone' });
          }}
          style={cartBtnStyle}
        >
          Add to cart
        </button>
        <button
          onClick={() => {
            props.removeToCartHandler({ price: 1000, name: 'iphone' });
          }}
          style={cartBtnStyle}
        >
          Remove from cart
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
