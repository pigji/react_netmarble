import React from 'react';
import './home.scss';
import SideBar from '../components/SideBar';
import Main from '../components/Main';


const Home = () => {
  return (
    <div>
      <div className='home'>
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;