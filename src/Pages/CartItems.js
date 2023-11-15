import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import Layout from '../components/Layout/Layout';

const CartItems = () => {
    const cartItems=useSelector(state=>state.cart.itemsList);
    let total=0;
    const itemsList=useSelector(state=>state.cart.itemsList)
itemsList.forEach(item => {
  total+=item.totalPrice;
  
});
  return (
    <Layout>
         <div className="container-fluid">
    <div className="cart-container">
      <center><h2>My Cart</h2></center>
      <div>
        {cartItems.map((item)=>(
        <div key={item.id}>
                          <Cart className='bg-light-subtle text-dark'
                          quantity={item.quantity}
                          id={item.id} 
                          image={item.image}
                                price={item.price}
                            total={item.totalPrice} 
                            name={item.name}/>
                            </div>
        ))}
        
      </div>
    </div>
    <div className='text-center'>
      <h1>Total:$ {Math.round(total * 10000) / 10000}</h1>

    </div>
    </div>
      
    </Layout>
  )
}

export default CartItems
