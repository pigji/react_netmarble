import React, { useState } from "react";
import "./mdpick.scss";

//슬라이드 배열
const slides = [
  {
    image: "/img/stores/MD_PICK_01.jpg",
    text1: "거센 비바람에도 걱정없는",
    text2: "넷마블프렌즈 우산을 준비해보세요.",
    hashtags: "#비가오는날엔 #튼튼한우산",
  },
  {
    image: "/img/stores/MD_PICK_02.jpg",
    text1: "비가 와도 걱정 없어요",
    text2: "아이가 더 안전하니까요.",
    hashtags: "#눈에잘보이는 #완전방수되는 #안전한우비",
  },
];

const MdPick = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  //이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  //페이지네이션
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="md">
      <h2>MD's PICK</h2>
      <div className="slider-container">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide"
              style={{ borderRadius:"20px", backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-overlay">
                <h3>{slide.text1}</h3>
                <h3>{slide.text2}</h3>
                <p>{slide.hashtags}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button left" onClick={prevSlide}>
          &lt;
        </button>
        <button className="nav-button right" onClick={nextSlide}>
          &gt;
        </button>

        {/*페이지네이션 */}
        <div className="pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MdPick;
