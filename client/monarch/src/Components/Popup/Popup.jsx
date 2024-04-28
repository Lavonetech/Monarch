import React, { useContext, useEffect, useRef} from 'react'
import { Link } from "react-router-dom";

import long from '../../Img/long-sleeve.svg';
import short from '../../Img/short-sleeve.svg';

import './Popup.css'
import { UserCharge, UserContext, UserPopup } from '../../App';


function Popup() {

  const dispalyRef = useRef();
  const longSleeveRef = useRef();
  const shortSleeveRef = useRef();

  const option = useContext(UserContext);
  const option_change = useContext(UserCharge);
  const open_pop = useContext(UserPopup);
  

  const select = (e) => {
    if(e.target.alt == "long"){
        longSleeveRef.current.style.backgroundColor = 'var(--ligth-blue)';
        shortSleeveRef.current.style.backgroundColor = 'var(--white-0)';
        option_change(0);  
      }
    else if(e.target.alt == "short"){
      shortSleeveRef.current.style.backgroundColor =  'var(--ligth-blue)';
      longSleeveRef.current.style.backgroundColor = 'var(--white-0)';
      option_change(1);
    }
  }

  const close = (e) => {
    dispalyRef.current.style.visibility = 'hidden';
   }
 
  if(open_pop){
      dispalyRef.current.style.visibility = 'visible';
  }

  useEffect( () => {

  },[shortSleeveRef, longSleeveRef,dispalyRef]);
  

  return (
    <>
     <div className="popup-box" ref={dispalyRef}>
        <div className="box-tittle container">
            <p class="">Sleeves</p>
            <Link to={"/"} relative="path" className="rest-1">Reset choice</Link>
           <div style={{position:'absolute'}} onClick={(e) => close(e)}>
               <i class="bi bi-x"></i>
            </div>
        </div>

          <div 
          className="long-sleeve container" 
          style={{backgroundColor:'var(--ligth-blue)'}}  
          onClick={(e) => select(e)} 
          ref={longSleeveRef}
          >
            <img src={long} alt="long" className=""/>
            <p>Long Sleeve</p>
          </div>

          <div 
          className="long-sleeve container" 
          style={{backgroundColor:'var(--white-0)'}} 
          onClick={(e) => select(e)} 
          ref={shortSleeveRef}
          >
            <img src={short} alt="short" className="img-2"/>
            <p>short Sleeve</p>
          </div>      
     </div>
    </>
  )
}

export default Popup;