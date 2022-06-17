//qna페이지
import React from 'react';
import './GuidePage.css'
//import { BrowserRouter,Route,Routes } from 'react-router-dom';

const Main = () => {
  
  const mainClick = (e) => {
    window.location.href = "/"
  }

  const profileClick = (e) => {
    window.location.href = "/login"
  }

  return (
  <div className='backgorund'>
    <div className='guide-border'>
      <button className='guide-main-button guide-button guide-text' onClick={mainClick}>흙발캠핑</button>
      <button className='guide-profile-button guide-button guide-text' onClick={profileClick}>프로필</button>
    </div>
    <div className='guide-area'>
      <div className='guide-text guide-shadow'>
        이용방법 안내
        <div className='guide-input-text'>
          흙발캠핑은 반려견과 함께 하는 캠핑장만을 추천하는 사이트입니다.
        </div>
        <div className='guide-input-text'>
          반려견과 함께 원하는 캠핑장을 고르고 여행을 떠나세요
        </div>
      </div>
    </div>
  </div>
  );
};

export default Main;