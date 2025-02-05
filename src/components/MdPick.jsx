import React from 'react';
import './mdpick.scss';

//Swiper API
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const MdPick = () => {
  return (
    <div className='md'>
      <h2>MD's PICK</h2>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop>
        <SwiperSlide>
          <div className='mdBgImg01' id='mdBgImg'>
            <img src="/img/stores/MD_PICK_01.jpg" alt="" />
            <div className='mgTxt'>
              <h4>
                거센 비바람에도 걱정없는<br />
                넷마블프렌즈 우산을 준비해보세요.
              </h4>
              <p>#비가오는날엔 #튼튼한우산</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='mdBgImg02' id='mdBgImg'>
        <img src="/img/stores/MD_PICK_02.jpg" alt="" />
            <div className='mgTxt'>
              <h4>
                거센 비바람에도 걱정없는<br />
                넷마블프렌즈 우산을 준비해보세요.
              </h4>
              <p>#비가오는날엔 #튼튼한우산</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MdPick;