import React, { useState, useEffect } from 'react';
import './store.scss';
import { Link } from 'react-router-dom';
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
          <Link to="/"><img src="/img/stores/logo.png" alt="logo" /></Link>
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

      <StoreBanner />
      <section id='new'>
        <h2>New</h2>
        <div className='goodsBox'>
          <ul>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/new황금복손.jpg" alt="황금복손" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 황금복손</p>
                <b>8,000원</b>
                <img src="/img/stores/newIcon.png" alt="newItem" />
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/new큰화투.jpg" alt="화투" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 ㅋㅋ 큰 화투</p>
                <b>22,000원</b>
                <img src="/img/stores/newIcon.png" alt="newItem" />
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/new포슬담요.jpg" alt="포슬담요" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 ㅋㅋ 포슬 담요</p>
                <b>20,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/new포슬키링.jpg" alt="포슬키링" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 ㅋㅋ 포슬 키링</p>
                <b>11,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/new골드용돈.jpg" alt="골드용돈" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 ㅋㅋ 골드용돈(3개입)</p>
                <b>5,000원</b>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <MdPick />
      <section id='friends'>
      <h2>Netmarble Friends</h2>
        <div className='goodsBox'>
          <ul>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/new황금복손.jpg" alt="황금복손" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 황금복손</p>
                <b>8,000원</b>
                <img src="/img/stores/newIcon.png" alt="newItem" />
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/new큰화투.jpg" alt="화투" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 ㅋㅋ 큰 화투</p>
                <b>22,000원</b>
                <img src="/img/stores/newIcon.png" alt="newItem" />
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/넷마블돗자리.jpg" alt="돗자리" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 돗자리</p>
                <b>25,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/넷마블번호주차판.jpg" alt="주차번호판" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 ㅋㅋ 주차 번호판</p>
                <b>15,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/넷마블우산.jpg" alt="장우산" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>넷마블프렌즈 프리미엄 장우산</p>
                <b>15,000원</b>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id='kungya'>
      <h2>Netmarble Friends</h2>
        <div className='goodsBox'>
          <ul>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/쿵야봉제인형.jpg" alt="쿵야봉제인형" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>쿵야 레스토랑즈 양쿵 주쿵 봉제인형</p>
                <b>25,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/쿵야키링.jpg" alt="쿵야키링" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>쿵야 레스토랑즈 신장개업 키링</p>
                <b>9,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/쿵야화환.jpg" alt="쿵야화환" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>쿵야 레스토랑즈 신장개업 화환</p>
                <b>5,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/쿵야마그넷.jpg" alt="쿵야마그넷" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>KUYA 멀티 마그넷</p>
                <b>9,900원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/쿵야머리띠.jpg" alt="쿵야머리띠" style={{width:"40%"}}/>
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>맑은 눈의 양파 쿵야 머리띠</p>
                <b>9,000원</b>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id='knights'>
      <h2>Seven Knights</h2>
        <div className='goodsBox'>
          <ul>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/세븐-아크릴피규어.jpg" alt="세븐아크릴피규어" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>세븐나이츠 Biya 아크릴 피규어</p>
                <b>15,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/세븐-마우스장패드.jpg" alt="마우스장패드" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>세븐나이츠 마우스 장패드</p>
                <b>22,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/세븐-아트북.jpg" alt="아트북" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>세븐나이츠2 아트북 Ver.1</p>
                <b>32,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/세븐-랜덤피규어.jpg" alt="랜덤피규어" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>세븐나이츠 SD 랜덤 피규어</p>
                <b>13,000원</b>
              </div>
            </li>
            <li>
              <div className='goodsImg'>
                <img src="/img/stores/세븐-피규어.jpg" alt="피규어" />
                <div className='goodsHoverIcon'>
                  <img src="/img/stores/hoverIcon01.png" className='hi01' alt="" />
                  <img src="/img/stores/hoverIcon02.png" className='hi02' alt="" />
                </div>
              </div>
              <div className='goodsTxt'>
                <p>세븐나이츠 피규어</p>
                <b>159,000원</b>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section id='eventBanner'></section>
      <footer></footer>

    </div> //netmarbleStore end
  );
};

export default Store;