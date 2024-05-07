import { createContext, useEffect, useRef, useState } from 'react';

import logo from './Img/logo.png';
import main_img_1 from './Img/main-img-1.png';
import main_img_2 from './Img/main-img-2.png';

import Scroll from './Components/Scroll/Scroll';
import Price from "./Components/Price/Price";
import Popup from './Components/Popup/Popup';

import './App.css';
import './Components/Popup/Popup';


export const UserContext = createContext();
export const UserPopup = createContext(); 
export const UserScroll = createContext();


function App() {

  const imgRef = useRef();

  const [img, setImg] = useState(main_img_1);

  const [option, setOption] = useState(false);
  const options = (e) => {
    setOption(e);
  }

  // Function (Scroll >> App >> Popup)

  const [productShow, setProductShow] = useState(false);
  const productShows =  (e) => {
    setProductShow(e);
  }

  const [scrollClick, setScrollClick] = useState(false);
  const scrollClicks = (e) => {
    setScrollClick(e);
  }

  useEffect( () => {
    if(option == 0){
       setImg(main_img_1);
       imgRef.current.style.width = '400px';
       imgRef.current.style.marginLeft = '30vw';
       imgRef.current.style.marginTop = '0vh';
      //  imgRef.current.style.opacity= '1';
      //  imgRef.current.style.transition= 'opacity 3s';    
    }
    else if(option == 1){
      setImg(main_img_2);
      imgRef.current.style.width = '325px';
      imgRef.current.style.marginLeft = '31.3vw';
      imgRef.current.style.marginTop = '0vh';  
      // imgRef.current.style.opacity= '1';
      // imgRef.current.style.transition= 'opacity 3s';
    }
},[imgRef,img,option,productShow,scrollClick]);

return (
    <UserContext.Provider value={option}>
      <div className="App"> 
        <UserScroll.Provider value={[productShows, scrollClicks]}>
            <Scroll/>
        </UserScroll.Provider>
        <div class="body">
          <img src={logo} alt='logo' className="logo"/>
          <UserPopup.Provider value={[options, scrollClick]} >
              <Popup />
          </UserPopup.Provider>
          <div className="effect-img-1"></div>
          <img src={img} alt='Img1' className='main-img-1' id='img1' ref={imgRef} />  
          <Price/>   
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
