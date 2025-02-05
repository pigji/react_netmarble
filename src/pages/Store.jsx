import React, { useState, useEffect } from 'react';
import './store.scss';
import { Link } from 'react-router-dom';



//swiper API
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import MdPick from '../components/MdPick';
import StoreBanner from '../components/StoreBanner';


const Store = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='netmarbleStore'>
      <nav
        style={{
          backgroundColor: isScrolled ? "rgb(255,255,255,0.9)" : "transparent",
          boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}>
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
      {/* <div className='slideBox'>
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
      </div> */}

      <StoreBanner />
      <section id='new'>
        <h2>New</h2>
        <div className='newBox'>
          <ul>
            <li>
              <div className='newImg'>
                <img src="/img/stores/new황금복손.jpg" alt="황금복손" />
                <div className='newHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='newTxt'>
                <p>넷마블프렌즈 황금복손</p>
                <b>8,000원</b>
                <img src="/img/stores/newIcon.png" alt="newItem" />
              </div>
            </li>
            <li>
              <div className='newImg'>
                <img src="/img/stores/new큰화투.jpg" alt="화투" />
              </div>
              <div className='newTxt'>
                <p>넷마블프렌즈 ㅋㅋ 큰 화투</p>
                <b>22,000원</b>
                <img src="/img/stores/newIcon.png" alt="newItem" />
              </div>
            </li>
            <li>
              <div className='newImg'>
                <img src="/img/stores/new포슬담요.jpg" alt="포슬담요" />
              </div>
              <div className='newTxt'>
                <p>넷마블프렌즈 ㅋㅋ 포슬 담요</p>
                <b>20,000원</b>
              </div>
            </li>
            <li>
              <div className='newImg'>
                <img src="/img/stores/new포슬키링.jpg" alt="포슬키링" />
              </div>
              <div className='newTxt'>
                <p>넷마블프렌즈 ㅋㅋ 포슬 키링</p>
                <b>11,000원</b>
              </div>
            </li>
            <li>
              <div className='newImg'>
                <img src="/img/stores/new골드용돈.jpg" alt="골드용돈" />
              </div>
              <div className='newTxt'>
                <p>넷마블프렌즈 ㅋㅋ 골드용돈(3개입)</p>
                <b>5,000원</b>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <MdPick />
      <section id='friends'></section>
      <section id='kungya'></section>
      <section id='knights'></section>
      <section id='eventBanner'></section>
      <footer></footer>

    </div> //netmarbleStore end
  );
};

export default Store;