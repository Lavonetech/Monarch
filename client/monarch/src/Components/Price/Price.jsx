import { Link } from "react-router-dom";
import React from 'react';

import icon1 from '../../Img/icon1.svg';
import './Price.css';

var price = '$'+ 110;

function Price() {
  return (
    <>
       <div className="price">
          <p>{price}</p>
        </div>
        <Link to={"/"} relative="path" className="continue-2 container text-decoration-none">
          <p className="mt-1">CONTINUE</p>
        </Link>
        <Link to={"/"} relative="path" className="reset container">
          <img src={icon1} alt="icon1"/>
          {/* <i class="bi bi-arrow-counterclockwise"></i> */}
          <p className="">Reset Choice</p>
        </Link>
      
    </>
  )
}

export default Price;