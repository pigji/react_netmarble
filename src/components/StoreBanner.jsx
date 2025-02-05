import { useState, useEffect } from "react";
import "./storebanner.scss";

//리액트 아이콘
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

//슬라이드 배열
const slides = [
  {
    image: "/img/stores/mainbanner_01.jpg?text=Slide+1",
    text1: "고오-급진 선물!",
    text2: "황금 福손을 준비했어요",
    hashtags: "#한눈에쏙 #대박나는 #효도아이템 #선물로딱",
  },
  {
    image: "/img/stores/mainbanner_02.jpg?text=Slide+2",
    text1: "온가족이 모이는 날에는",
    text2: "큰화투로 함께 즐겨요!",
    hashtags: "#한눈에쏙 #잘보이고잘잡히는 #효도아이템",
  },
  {
    image: "/img/stores/mainbanner_03.jpg?text=Slide+3",
    text1: "손도 999.9의 진심을 다해",
    text2: "금빛 마음을 전해보아요",
    hashtags: "#신상품 #감사의마음을담아 #골드바 #용돈봉투",
  },
  {
    image: "/img/stores/mainbanner_04.jpg?text=Slide+3",
    text1: "포슬포슬 귀여운",
    text2: "'ㅋㅋ'의 등장!",
    hashtags: "#추워도걱정없는 #봉제키링 #대형양털담요",
  },
  {
    image: "/img/stores/mainbanner_05.jpg?text=Slide+3",
    text1: "지구를 지키는 작은 습관",
    text2: "ㅋㅋ와 함께 실천해요!~",
    hashtags: "#탄소중립 #작은실천 #ㅋㅋ와함께해요",
  },
  {
    image: "/img/stores/mainbanner_06.jpg?text=Slide+3",
    text1: "WAIT A SEC",
    text2: "ㅋㅋ주차번호판",
    hashtags: "#안심번호 #12자리숫자 #논슬립",
  },
];

const StoreBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    //다음 슬라이드로 이동
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    //이전 슬라이드로 이동
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    //5초마다 자동 전환
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="storebanner">
      <div className="slider-container">
        <div
          className="slide"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        >
          <div className="text-overlay">
            <p className="text-xl">{slides[currentIndex].text1}<br/>{slides[currentIndex].text2}</p>
            <p className="text-sm">{slides[currentIndex].hashtags}</p>
          </div>
        </div>

        <button className="nav-button left" onClick={prevSlide}>
          <FaAngleLeft />
        </button>

        <button className="nav-button right" onClick={nextSlide}>
          <FaAngleRight />
        </button>

        <div className="indicator-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
