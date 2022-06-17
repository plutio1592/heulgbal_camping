import { useState } from 'react';
import React from 'react';
import './Main.css'
import MyModal from '../Model/ProFileModel';

const Main = () => {
  const [isOpen, setOpen] = useState(false)

  const handleClick1 = () => {
    setOpen(true)
  }

  function introduceClick(e) {
    window.location.href = "/introduce"
  }

  // function serchClick(e) {
  //   window.location.href = "/serch"
  // }
  
  const img = [
    'http://www.gocamping.or.kr/upload/camp/1499/thumb/thumb_720_5862JRdryzLnIuLrl8eILQf5.jpg',
    'https://gocamping.or.kr/upload/camp/3316/thumb/thumb_1000_5314qd9pusSZnKPZ6GjoKymy.jpg',
    'https://gocamping.or.kr/upload/camp/1835/thumb/thumb_720_0537181iagb0BQ10QqUVMjR1.jpg',
    'https://www.gocamping.or.kr/upload/camp/7160/thumb/thumb_720_7402ritbri2rwuYzAZ4qnrhU.jpg'
  ]

  let i=0;
function moveleft() {
    if (i < 4) {
        i++;
        setTimeout(console.log(i), 1000);
    } else {
        
        i = 0;
        setTimeout(console.log(i), 0);
    }
    
}


  return (
  <div className='first'>
    
    <span className='border'>
        <button className='mainb text'>흙발캠핑</button>
        <button className='serchb text'>검색</button>
        <button className='profileb text' onClick={handleClick1}>프로필</button>
        <MyModal 
        isOpen={isOpen}
        onRequestClose={() => setOpen(false)}
        />
      </span>
    <div className='benner text'>
      이용안내
      {moveleft()}
    </div>
    <div className='serchbox'>
    {/* <button className='settingbox text'>체크인</button>
    <button className='settingbox text'>체크아웃</button>
    <button className='settingbox text'>지역선택</button>
    <button className='settingbox2 text' onClick={serchClick}>검색</button> */}
    </div>
    <button className='text introduce' onClick={introduceClick}>이용안내</button>
    <div className='text benner'>
      <p className='camplist'>
        캠핑장 목록
      </p>
    </div>
    </div>
  );
};

export default Main;