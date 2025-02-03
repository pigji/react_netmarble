import React from 'react';
import './allgames.scss';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';



const AllGames = () => {
  return (
    <div className='all'>
      <SideBar />
      <section>
        <div className='allGames'>
          전체게임
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllGames;