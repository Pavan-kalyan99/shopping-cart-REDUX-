import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';

import ProductsData from './ProductsData';


const Products = () => {
    const [product,setProduct]=useState([]);
    const navigate=useNavigate();
// 


    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products?limit=6')
            
              .then(response=>setProduct(response.data))
    },[])
  return (
    <>
       <div className='' id='AllProducts'>
        <h1 className='title'>Top Products</h1>
  <div className="row">

  {
    product.map((product, index)=>(
      <div className='col-sm-4 mb-3 mb-sm-0'>
<ProductsData id={product.id} 
   name={product.title.substring(0,11)} 
   price={product.price} 
   image={product.image}/>
   </div>
    ))
  }
  
  
</div>

    </div>
      
      
    </>
  )
}

export default Products
