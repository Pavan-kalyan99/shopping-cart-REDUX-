
import './App.css';
import {Routes,Route} from 'react-router-dom'

import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Login from './Pages/Form.js/Login';
import Cart from './Pages/Cart';
import Notfound from './Pages/Notfound';
import Register from './Pages/Form.js/Register';
import ProductDetails from './Pages/ProductDetails';
import CartItems from './Pages/CartItems';
import { useSelector } from 'react-redux';

function App() {
  const cartItems=useSelector((state)=>state.cart.itemsList);
  console.log(cartItems)
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<CartItems/>}/>
      <Route path='/products/:id' element={<ProductDetails/>}/>

      <Route path='*' element={<Notfound/>}/>

    </Routes>
    </>
   
  );
}

export default App;
