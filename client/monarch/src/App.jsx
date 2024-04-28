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
export const UserCharge = createContext();
export const UserProductShow = createContext();
export const UserShowPopup = createContext();
export const UserPopup = createContext(); 
export const UserScroll = createContext();


function App() {

  const imgRef = useRef();

  const [img, setImg] = useState(main_img_1);

  const [option, setOption] = useState(false);
  const option_change = (opt) => {
    setOption(opt);
    // console.log(opt);
  }

  const [productShow, setProductShow] = useState(false);
  const productShow_change =  (pro) => {
    setProductShow(pro);
    // console.log(pro);
  }

  const [scroll_click, setScrollClick] = useState(false);
  const scroll_clicks = (sc) => {
    setScrollClick(sc);
    // console.log(sc);
  }

  useEffect( () => {
    if(option == 0){
       setImg(main_img_1);
       imgRef.current.style.width = '400px';
       imgRef.current.style.marginLeft = '30vw';
       imgRef.current.style.marginTop = '0vh';
      //  imgRef.current.style.transition = '0.25s';
      
    }
    else if(option == 1){
      setImg(main_img_2);
      imgRef.current.style.width = '325px';
      imgRef.current.style.marginLeft = '31.3vw';
      imgRef.current.style.marginTop = '0vh';
      // imgRef.current.style.transition = '0.25s';

    }

},[imgRef,img,option,productShow,scroll_click]);

   
return (

    <UserContext.Provider value={option}>
      <div className="App"> 
        <UserProductShow.Provider value={productShow_change}>
          <UserShowPopup.Provider value={scroll_clicks}>
              <Scroll main_img={img} />
          </UserShowPopup.Provider>    
        </UserProductShow.Provider>
      

        <div class="body">
          <img src={logo} alt='logo' className="logo"/>
          <UserCharge.Provider value={option_change} >
            <UserPopup.Provider value={scroll_click}>
                <Popup />
            </UserPopup.Provider>
          </UserCharge.Provider>

          <div className="effect-img-1"></div>
          <img src={img} alt='Img1' className='main-img-1' id='img1' ref={imgRef}/>
          
          <Price/>
        
        </div>
      </div>
    </UserContext.Provider>

  );
}

export default App;
