import React from 'react';
import './slidebanner.scss';

//swiper API
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SlideBanner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000
        }}
        speed={2500}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="/img/슬라이드배너1(킹아서).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/슬라이드배너2(파이터).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/슬라이드배너3(왕좌의게임).png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/슬라이드배너4(몬길).jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/슬라이드배너5(세븐나이츠).jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlideBanner;