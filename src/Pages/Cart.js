import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { cartActions } from '../store/CartSlice'

const Cart = ({id,name,image,price,quantity,total}) => {
  const dispatch = useDispatch();
  const incrementCartItem=()=>{dispatch(cartActions.addToCart({
    id,    
    name,
    price,
    image,
  }))
  };
  
  const decrementCartItem=()=>{
    dispatch(cartActions.removeFromCart(id));

  }
  function clamp(min, max, val) {
    return Math.min(Math.max(min, +val), max);
}

  //const [mycart,setCart]=useState([ ])
  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/carts')
  //           .then(res=>res.json())
  //           .then(cart=>setCart(cart))
  // },[])
 // console.log(mycart)

  return (
    
      <row>
      
    
    <div className="container-fluid">
      <div className='cartContainer'>

     
      <div className='cartList'>
      <img src={image}  className='cartimg' style={{width:'100px'}} alt="pics"/>

      </div>
      <div className='cartList'>name:{name}</div>
      <div className='cartList'>${price}</div>
      <div className='cartList'>

      <button className="cartbtn" onClick={incrementCartItem}>
        +
      </button>
      <button className="cartbtn" onClick={decrementCartItem}>
        -
      </button>
      </div>

      <div className='cartList'> Quantity:{quantity}</div>
      <div className='cartList'>Total $ {Math.round(total * 10000) / 10000}</div>
   

     

      </div>
    

    </div>
    </row>


  )
}

export default Cart

