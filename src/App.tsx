import React from 'react';
import './App.css';

// pages
import HomeContainer from 'containers/HomeContainer';
import HeaderContainer from 'containers/HeaderContainer';

function App() {
  return (
    <div>
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
