import React from "react";
import './footer.scss';

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer">
          <div class="top">
            <h2>netMarble</h2>
            <select name="language" id="language">
              <option value="korean">Korean</option>
              <option value="english">English</option>
              <option value="japan">Japan</option>
              <option value="china">China</option>
            </select>
          </div>
          <div class="footer-txt">
            <p>
              넷마블(주) 사업자번호 : 105-87-64746 통신판매업신고번호 : 제
              2014-서울구로-1028호 각자 대표이사: 권영식, 김병규 호스팅서비스
              사업자 : 넷마블(주)
            </p>
            <p>
              서울특별시 구로구 디지털로26길 38, G-Tower 넷마블 |
              PC고객센터:1588-5180 / 모바일고객센터:1588-3995 / 제2의나라
              고객센터:1670-0359 / 블레이드&소울 레볼루션 고객센터:1670-1182 /
              리니지2 레볼루션 고객센터:1670-8212 / Fax:02-6375-1790
            </p>
            <b>copyright &copy; Netmarble Corp. All Rights Reserved.</b>
          </div>
          <ul>
            <li>회사소개</li>
            <li>광고/제휴문의</li>
            <li>약관보기</li>
            <li>
              <b>개인정보처리방침</b>
            </li>
            <li>이용자 권익 보호정책</li>
            <li>전자우편</li>
            <li>
              <b>사업자정보공개사이트</b>
            </li>
            <li>사이트맵</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
