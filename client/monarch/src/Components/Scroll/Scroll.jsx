import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";

import img1 from '../../Img/fabric.svg';
import long_sleeve from '../../Img/long-sleeve.svg';
import short_sleeve from '../../Img/short-sleeve.svg';
import img3 from '../../Img/collar.svg';
import img4 from '../../Img/cuff.svg';
import img5 from '../../Img/placket.svg';
import img6 from '../../Img/pocket.svg';
import img7 from '../../Img/back-details.svg';
import img8 from '../../Img/back-yoke.svg';
import img9 from '../../Img/bottom-cut.svg';
import img10 from '../../Img/shirt-button.svg';
import img11 from '../../Img/button-thread.svg';
import img12 from '../../Img/contrasts.svg';
import img13 from '../../Img/A B C.svg';
import img14 from '../../Img/handkerchief.svg';

import '../../App';
import './Scroll.css';

import { UserContext, UserProductShow, UserShowPopup} from "../../App";
import Product from '../Product/Product';


const products = [
   {
      id:1, 
      img: img1, 
      text: "Fabric"
   },
   {
      id:2, 
      img: long_sleeve, 
      text: "Sleeve"
   },
   {id:3, img: img3, text: "Collar"},
   {id:4, img: img4, text: "Cuff"},
   {id:5, img: img5, text: "Placket"},
   {id:6, img: img6, text: "Pocket"},
   {id:7, img: img7, text: "Back Details"},
   {id:8, img: img8, text: "Back Yoke"},
   {id:9, img: img9, text: "Bottom Cut"},
   {id:10, img: img10, text: "Button"},
   {id:11, img: img11, text: "Button Thread"},
   {id:12, img: img12, text: "Contrasts"},
   {id:13, img: img13, text: "Embroidery"},
   {id:14, img: img14, text: "Handkerchief"},

];

const product_imgs = products.filter(product_1 => product_1.id > 0 );

const product = product_imgs.map( product_img =>
   <>
     <div key={product_img.id} >
       <Product  src={product_img.img} text={product_img.text} value={product_img.text} />
     </div>    
   </>  
    
);


const style_1 = {
   backgroundColor:'var(--white-0)', 
   color:'var(--back)',
}

const style_2 = {
   paddingTop:'8px', 
   height:'20px', 
   fontWeight:'700',
}

const style_3 = {
   paddingTop:'0px', 
   height:'0px', 
   fontWeight:'600', 
   marginTop:'-3vh',
}



function Scroll() {

     const option = useContext(UserContext);   
     const productShow = useContext(UserProductShow);
     const scrollClicks = useContext(UserShowPopup);
     
     const [num , setNum] = useState(1);
   
     function click_popup(e){
      
         if(e.target.src == "http://localhost:5173/src/Img/long-sleeve.svg" | 
         e.target.src == "http://localhost:5173/src/Img/short-sleeve.svg"){
               productShow(true);
            
            
               if(num == 1){
                  scrollClicks(true);
                  
                  setNum(2);
               }else if(num == 2){
                  scrollClicks(false);
                  setNum(1);

               }
         }

      }

      useEffect( () => {

      },[num]);


      return (
         <>
            <div className="Scroll">
               <div class="product-name container mt-3" style={style_1}>
                  <p class="" style={style_2}>Product Name</p>
               </div>

               <div onClick={ (e) => {click_popup(e)} } >
                     <>{product}</>
               </div>

               <Link to={"/"} relative="path" className="text-decoration-none">
                     <div class="product-name container mt-3 mb-4" style={style_1}>
                        <i class="bi bi-arrow-right m-3 " style={{fontSize:'48px'}}></i>
                        <p class="p-2" style={style_3}>Continue</p>
                     </div>
               </Link>          
            </div>    
         </>
  );
}

export default Scroll;
