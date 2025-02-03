import React from "react";
import './sidebar.scss';
import { Link } from 'react-router-dom';

//리액트 아이콘
import { LuSquareUserRound } from "react-icons/lu";
import { LuNotebookPen } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { GrChannel } from "react-icons/gr";
import { IoStorefront } from "react-icons/io5";


const SideBar = () => {
  return (
    <div>
      <header>
        <div class="header_bar">
          <div class="logo">
            <Link to="home">netmarble</Link>
          </div>
          <div class="login">
            <Link to="/login">
              <LuSquareUserRound /> 로그인
            </Link>
            <Link to="/signup">
              <LuNotebookPen /> 회원가입
            </Link>
          </div>
          <ul class="menu">
            <li>
            <Link to="/">
              <MdMiscellaneousServices /> 고객센터
            </Link>
            </li>
            <li>
            <Link to="/">
              <FaLaptopCode /> 넷마블PC방
            </Link>
            </li>
            <li>
            <Link to="/">
              <FaGift /> 이벤트
            </Link>
            </li>
            <li>
            <Link to="/">
              <GrChannel  /> 채널 넷마블
            </Link>
            </li>
            <li>
            <Link to="/">
              <IoStorefront /> 넷마블 스토어
            </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default SideBar;
