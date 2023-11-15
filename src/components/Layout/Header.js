import React from 'react'
import { Link } from 'react-router-dom';

// cart
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/CartSlice';

const Header = () => {
  const quantity=useSelector((state)=>state.cart.totalQuantity);
 const dispatch=useDispatch();
 const showCart=()=>{
  dispatch(cartActions.setShowCart())
 }
  return (
<nav className="navbar">
  <div className="container-fluid">

  
    <div className="navbar-list">
      <h1 className='navbar-logo'>E-Cart</h1>
      <div className='navbar-box'>
      <ul className="navbar-items">
      
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/login'>Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/cart'>Cart:{quantity}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/about'>About Us</Link>
      </li>
    </ul>
      </div>
      
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>






  )
}

export default Header
