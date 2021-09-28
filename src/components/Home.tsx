import React from 'react';
import phoneImg from 'assets/phone.jpg';
import cartImg from 'assets/cart.jpg';
const Home = (props: any) => {
  console.error('props received by home.js__________', props);

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
      <header>
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <li
            style={{
              position: 'relative',
              listStyle: 'none',
              padding: '1rem',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                background: 'red',
                padding: '1rem',
                borderRadius: '50%',
                top: '0',
                display: 'flex',
                alignItems: 'center',
                right: '0',
                color: 'white',
                position: 'absolute',
                fontSize: '1.4rem',
                height: '0.5rem',
              }}
            >
              {props.reduxData.cartItems.length}
            </span>

            <img style={{ height: '5rem' }} src={cartImg} alt="" />
          </li>
        </nav>
      </header>
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
      </div>
    </React.Fragment>
  );
};

export default Home;
