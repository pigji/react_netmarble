import React from 'react';
import './store.scss';
import { Link } from 'react-router-dom';

//swiper API
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Store = () => {
  return (
    <div className='netmarbleStore'>
      <nav>
        <div className='logoImg'>
          <img src="/img/stores/logo.png" alt="logo" />
        </div>
        <div className='rightMenu'>
          <ul>
            <li>
              <Link to="/">BEST</Link>
              <Link to="/">NEW</Link>
              <Link to="/">카테고리</Link>
              <Link to="/">캐릭터</Link>
              <Link to="/">고객센터</Link>
            </li>
          </ul>
          <ul className='userMenu'>
            <li>
              <img src="/img/stores/유저.png" alt="user" />
              <div className='hoverMenu'>
                <ul>
                  <li><Link to="/">로그인</Link></li>
                  <li><Link to="/">회원가입</Link></li>
                  <li><Link to="/">주문조회</Link></li>
                </ul>
              </div>
              </li>
            <li><img src="/img/stores/장바구니.png" alt="장바구니" /></li>
            <li><img src="/img/stores/검색.png" alt="검색버튼" /></li>
          </ul>
        </div>
      </nav>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop>
        <SwiperSlide>
          <img src="/img/stores/슬라이드배너1.jpg" alt="슬라이드배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/stores/슬라이드배너2.jpg" alt="슬라이드배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/stores/슬라이드배너3.jpg" alt="슬라이드배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/stores/슬라이드배너4.jpg" alt="슬라이드배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/stores/슬라이드배너5.jpg" alt="슬라이드배너" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/stores/슬라이드배너6.jpg" alt="슬라이드배너" />
        </SwiperSlide>
      </Swiper>

      <section id='new'></section>
      <section id='md'></section>
      <section id='friends'></section>
      <section id='kungya'></section>
      <section id='knights'></section>
      <section id='knights'></section>
      <section id='eventBanner'></section>
      <footer></footer>
      
    </div> //netmarbleStore end
  );
};

export default Store;