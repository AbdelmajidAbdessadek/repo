import React from 'react';
import Navigation from '../componenets/Navigation';
import Logo from '../componenets/Logo';
import Countries from '../componenets/Countries';
const Home = () => {
    return (
      <div>
        <Logo/>
        <Navigation />
        <Countries />
        
      </div>
    );
};

export default Home;