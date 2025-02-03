import React from 'react';
import './games.scss';
import { Link } from 'react-router-dom';
//리액트 아이콘
import { FaArrowRight } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";

const Games = () => {
  return (
    <div>
      <section>
        <div className='games'>
          <div id='mobile'>
            <div className='mobileTop'>
              <h2>Mobile Games</h2>
              <Link to="">전체보기 <FaArrowRight /></Link>
            </div>
            <ul className='mobileGames'>
              <li>
                <Link to="/">
                  <div className='mobileBox'>
                    <div className='mobileIconBox'>
                      <div className='mobileImg'>
                        <img src="img/킹아서표지.jpg" alt="킹아서"/>
                        <img src="img/킹아서(hover).png" alt="킹아서" className='txtImg'/>
                      </div>
                      <div className='mHoverImg'>
                        <img src="img/킹아서(hover).png" alt="킹아서" />
                        <p class="text">Official Site →</p>
                      </div>
                    </div>
                    <div className='mIconBox'>
                      <div className='mIconImg'>
                        <img src="img/킹아서_아이콘.jpg" alt="킹아서아이콘" />
                      </div>
                      <div className='mIconTxt'>
                        <h5>킹 아서: 레전드 라이즈</h5>
                        <p>RPG</p>
                      </div>
                    </div> {/* mIconBox end */}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className='mobileBox'>
                    <div className='mobileIconBox'>
                      <div className='mobileImg'>
                        <img src="img/일곱개의대죄표지.jpg" alt="일곱개의대죄"/>
                        <img src="img/일곱개의대죄(hover).png" alt="일곱개의대죄" className='txtImg'/>
                      </div>
                      <div className='mHoverImg'>
                        <img src="img/일곱개의대죄(hover).png" alt="일곱개의대죄" />
                        <p class="text">Official Site →</p>
                      </div>
                    </div>
                    <div className='mIconBox'>
                      <div className='mIconImg'>
                        <img src="img/일곱개의대죄_아이콘.png" alt="일곱개의대죄아이콘" />
                      </div>
                      <div className='mIconTxt'>
                        <h5>일곱 개의 대죄 키우기</h5>
                        <p>RPG</p>
                      </div>
                    </div> {/* mIconBox end */}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className='mobileBox'>
                    <div className='mobileIconBox'>
                      <div className='mobileImg'>
                        <img src="img/레이븐표지.jpg" alt=""/>
                        <img src="img/레이븐(hover).png" alt="" className='txtImg'/>
                      </div>
                      <div className='mHoverImg'>
                        <img src="img/레이븐(hover).png" alt="" />
                        <p class="text">Official Site →</p>
                      </div>
                    </div>
                    <div className='mIconBox'>
                      <div className='mIconImg'>
                        <img src="img/레이븐_아이콘.jpg" alt="" />
                      </div>
                      <div className='mIconTxt'>
                        <h5>레이븐2</h5>
                        <p>MMORPG</p>
                      </div>
                    </div> {/* mIconBox end */}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className='mobileBox'>
                    <div className='mobileIconBox'>
                      <div className='mobileImg'>
                        <img src="img/나혼자레벨업표지.jpg" alt="나혼자레벨업"/>
                        <img src="img/나혼자레벨업(hover).png" alt="나혼자레벨업" className='txtImg'/>
                      </div>
                      <div className='mHoverImg'>
                        <img src="img/나혼자레벨업(hover).png" alt="나혼자레벨업" />
                        <p class="text">Official Site →</p>
                      </div>
                    </div>
                    <div className='mIconBox'>
                      <div className='mIconImg'>
                        <img src="img/나혼자레벨업_아이콘.jpg" alt="나혼자레벨업아이콘" />
                      </div>
                      <div className='mIconTxt'>
                        <h5>나 혼자만 레벨업: 어라이즈</h5>
                        <p>RPG</p>
                      </div>
                    </div> {/* mIconBox end */}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className='mobileBox'>
                    <div className='mobileIconBox'>
                      <div className='mobileImg'>
                        <img src="img/아스달연대기표지.png" alt="아스달연대기"/>
                        <img src="img/아스달연대기(hover).png" alt="아스달연대기" className='txtImg'/>
                      </div>
                      <div className='mHoverImg'>
                        <img src="img/아스달연대기(hover).png" alt="아스달연대기" />
                        <p class="text">Official Site →</p>
                      </div>
                    </div>
                    <div className='mIconBox'>
                      <div className='mIconImg'>
                        <img src="img/아스달연대기_아이콘.png" alt="아스달연대기아이콘" />
                      </div>
                      <div className='mIconTxt'>
                        <h5>아스달 연대기: 세 개의 세력</h5>
                        <p>MMORPG</p>
                      </div>
                    </div> {/* mIconBox end */}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className='mobileBox'>
                    <div className='mobileIconBox'>
                      <div className='mobileImg'>
                        <img src="img/세븐나이츠표지.jpg" alt="세븐나이츠"/>
                        <img src="img/세븐나이츠(hover).png" alt="세븐나이츠" className='txtImg'/>
                      </div>
                      <div className='mHoverImg'>
                        <img src="img/세븐나이츠(hover).png" alt="세븐나이츠" />
                        <p class="text">Official Site →</p>
                      </div>
                    </div>
                    <div className='mIconBox'>
                      <div className='mIconImg'>
                        <img src="img/세븐나이츠_아이콘.jpg" alt="세븐나이츠아이콘" />
                      </div>
                      <div className='mIconTxt'>
                        <h5>세븐나이츠 키우기</h5>
                        <p>RPG</p>
                      </div>
                    </div> {/* mIconBox end */}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className='mobileBox'>
                    <div className='mobileIconBox'>
                      <div className='mobileImg'>
                        <img src="img/블레이드표지.jpg" alt="블레이드"/>
                        <img src="img/블레이드(hover).png" alt="블레이드" className='txtImg'/>
                      </div>
                      <div className='mHoverImg'>
                        <img src="img/블레이드(hover).png" alt="블레이드" />
                        <p class="text">Official Site →</p>
                      </div>
                    </div>
                    <div className='mIconBox'>
                      <div className='mIconImg'>
                        <img src="img/블레이드_아이콘.png" alt="블레이드아이콘" />
                      </div>
                      <div className='mIconTxt'>
                        <h5>블레이드&소울 레볼루션</h5>
                        <p>MMORPG</p>
                      </div>
                    </div> {/* mIconBox end */}
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className='mobileBox'>
                    <div className='mobileIconBox'>
                      <div className='mobileImg'>
                        <img src="img/리니지표지.jpg" alt="리니지"/>
                        <img src="img/리니지(hover).png" alt="리니지" className='txtImg'/>
                      </div>
                      <div className='mHoverImg'>
                        <img src="img/리니지(hover).png" alt="리니지" />
                        <p class="text">Official Site →</p>
                      </div>
                    </div>
                    <div className='mIconBox'>
                      <div className='mIconImg'>
                        <img src="img/리니지_아이콘.png" alt="리니지아이콘" />
                      </div>
                      <div className='mIconTxt'>
                        <h5>리니지2 레볼루션</h5>
                        <p>MMORPG</p>
                      </div>
                    </div> {/* mIconBox end */}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div id='pc'>
            <h2>PC Games</h2>
            <ul className='pcGames'>
              <li>
                <Link to="https://ma9.netmarble.net/main.asp?utm_source=potal&utm_medium=list&utm_campaign=ma9&utm_id=potal_list_ma9">
                  <div className='pcBox'>
                    <div className='pcImg'>
                      <img src="img/pc게임(야구).png" alt="마구마구" />
                    </div>
                    <div className='pcTxt'>
                      <h6>마구마구</h6>
                      <p>스포츠/FPS</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="https://baduk.netmarble.net/">
                  <div className='pcBox'>
                    <div className='pcImg'>
                      <img src="img/pc게임(바둑).jpg" alt="바둑" />
                    </div>
                    <div className='pcTxt'>
                      <h6>바둑</h6>
                      <p>보드/캐주얼</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="https://modoo.netmarble.net/?utm_source=potal&utm_medium=list&utm_campaign=modoo9&utm_id=potal_list_modoo">
                  <div className='pcBox'>
                    <div className='pcImg'>
                      <img src="img/pc게임(모두의마블).png" alt="모두의마블" />
                    </div>
                    <div className='pcTxt'>
                      <h6>모두의마블</h6>
                      <p>보드/캐주얼</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="https://sf2.netmarble.net/main.asp">
                  <div className='pcBox'>
                    <div className='pcImg'>
                      <img src="img/pc게임(스페셜).png" alt="스페셜포스2" />
                    </div>
                    <div className='pcTxt'>
                      <h6>스페셜포스2</h6>
                      <p>RPG</p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="https://dho.netmarble.net/main.asp?utm_source=potal&utm_medium=list&utm_campaign=dho&utm_id=potal_list_dho">
                  <div className='pcBox'>
                    <div className='pcImg'>
                      <img src="img/pc게임(대항해시대).png" alt="대항해시대" />
                    </div>
                    <div className='pcTxt'>
                      <h6>대항해시대</h6>
                      <p>RPG</p>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div> {/* games */}
        <div className='bannerGames'>
          <div className='bgImg'>
            <img src="img/그랜드오픈_배너.jpg" alt="그랜드오프배너" />
          </div>
          <div className='gameText'>
            <h3>전체 PC게임</h3>
            <ul>
              <li><Link to="/">마구마구</Link></li>
              <li><Link to="/">모두의마블</Link></li>
              <li><Link to="/">클럽엠스타</Link></li>
              <li><Link to="/">스페셜포스2</Link></li>
              <li><Link to="/">상하이</Link></li>
              <li><Link to="/">사천성</Link></li>
              <li><Link to="/">바둑</Link></li>
              <li><Link to="/">캐릭챗</Link></li>
              <li><Link to="/">대항해시대</Link></li>
              <li><Link to="/">캐치마인드</Link></li>
              <li><Link to="/">배틀가로세로+</Link></li>
              <li><Link to="/">아바타</Link></li>
              <li><Link to="/">파워알까기</Link></li>
              <li><Link to="/">윷놀이</Link></li>
              <li><Link to="/">리치마블</Link></li>
              <li><Link to="/">야채부락리</Link></li>
              <li><Link to="/">파워쿵쿵따</Link></li>
              <li><Link to="/">장기</Link></li>
              <li><Link to="/">틀린그림찾기</Link></li>
              <li><Link to="/">어썰트기어</Link></li>
              <li><Link to="/">오목</Link></li>
            </ul>
          </div>
        </div>
        <div className='notification'>
          <p> <FaRegBell /> [안내] 설날 연휴(1/27 ~ 1/30) 넷마블 고객센터 이용 안내</p>
        </div>
      </section>
    </div>
  );
};

export default Games;