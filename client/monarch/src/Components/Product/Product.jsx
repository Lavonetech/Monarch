import React from 'react'
import './Product.css'

function Product(props) {
  return (
    <>
    <div class="product-name container mt-3">
        <img src={props.src} alt="" className="img-1 mt-2"/>
        <p class="mb-1" >{props.text}</p>
    </div>   
    </>
  )
}

export default Product