import React from 'react';
import './main.scss';
import SlideBanner from './SlideBanner';
import Games from './Games';
import Footer from './Footer';



const Main = () => {
  return (
    <div>
      <div className='main'>
        <SlideBanner />
        <Games />
        <Footer />
      </div>
    </div>
  );
};

export default Main;