import cartImg from 'assets/cart.jpg';

const Header = (props: any) => {
  console.error('🇭🌴 props received by header.js____________');
  console.error(props);
  return (
    <>
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
    </>
  );
};

export default Header;
