import React from 'react';
import './SerchMain.css'
import { useState } from 'react';
import MyModal from '../Model/ProFileModel';
import styled from 'styled-components';

const First = styled.div`
  left: 50%;
  right: 50%;
  width: 80em;
  height: auto;
  position: absolute;
  border-radius: 0.3rem;
  align-content: space-between;
  transform: translate(-50%);
  border: 2px solid yellowgreen;
  text-align: center;
`;

const Main = () => {
  const [isOpen, setOpen] = useState(false)
  const handleClick1 = () => {
    setOpen(true)
  }
  const handleClick2 = () => {
    window.location.href = "/"
  }

  const handleClick3 = () => {
    if(1) {
      //window.location.href = "/login"
      console.log(111)
    }

    else {
      //window.location.href = "/reservationsuccess"
      console.log(2222)
    }
  }

  return (
    <First>
    <span className='serch-border'>
        <button className='serch-mainb' onClick={handleClick2}>Heulgbal Camping</button>
      <img className="serch-isIcon" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtbyGa%2FbtrEZN75A0O%2F5GoRRGqdjd1WQYwWosY8I0%2Fimg.png" alt=""/>
        <img className='serch-profileb' onClick={handleClick1} src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd2JHkq%2FbtrE1uApCCY%2FBJu43VM8miKTEHcFSAnqz0%2Fimg.png" alt="" />
        <MyModal
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
      </span>
    
      <div className='serch-test'>
        <div></div>
        <div className='serch-img' />
        <div className='serch-right-text'>
            139,000₩
            <div className='serch-right-inner-text'>예약 가능</div>
          </div>
        <div className='serch-center-text'>4인카라반
          <div className='serch-center-inner-text'>최소인원 2인 / 최대인원4인</div>
          <div>예약 가능 일자</div>
        </div>
        <div></div>
      </div>
    
      <div className='serch-test'>
        <div>캠핑장 사진</div>
        <div className='constainer'>
          <div className='inner'>
            <img className='serch-inner-img' src='https://www.gyeongju.go.kr/upload/content/thumb/20200428/24F347BD8AE241D9B2B3FCA410B17329.jpg' alt=''/>
          </div>
          <div className='inner'>
            <img className='serch-inner-img' src='https://www.gyeongju.go.kr/upload/content/thumb/20191227/0193D2F2A67E444FAD36A682A1A3CCDF.jpg' alt=''/>
          </div>
          <div className='inner'>
            <img className='serch-inner-img' src='https://www.gyeongju.go.kr/upload/content/thumb/20191227/7E2A850778A44884B913C2326ED5EB6F.jpg' alt=''/>
          </div>
          <div className='inner'>
            <img className='serch-inner-img' src='https://www.gyeongju.go.kr/upload/content/thumb/20191227/22ED9380B9954C9B8443DA61E00568FE.jpg' alt=''/>
          </div>
          <div className='inner'>
            <img className='serch-inner-img' src='https://www.gyeongju.go.kr/upload/content/thumb/20191227/6A20854B8E1E4F3482AA51FC100C2DCA.jpg' alt=''/>
          </div>
          <div className='inner'>
            <img className='serch-inner-img' src='https://www.gyeongju.go.kr/upload/content/thumb/20191227/89168A01077F4174B315A1742141A6B2.jpg' alt=''/>
          </div>
        </div>
      </div>
      <div className='serch-test'>
        <div>알립니다</div>
      </div>
      <div className='serch-test'>
        <div>취소 수수료 안내</div>
          <div>취소 수수료는 해당 캠핑장에서 책정합니다</div>
          <div>흙발 캠핑에서 책정하지 않습니다</div>
      </div>
      <button className='serch-test-button1' onClick={handleClick3} >바로 예약</button>
      <button className='serch-test-button2' onClick={handleClick2} >닫기</button>
    </First>
  );
};

export default Main;