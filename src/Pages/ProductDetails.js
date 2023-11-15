import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
//import { context } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';

const ProductDetails = () => {
    const[details,setDetails]=useState([]);
    const {id}=useParams();

    useEffect(()=>{
       fetch(`https://fakestoreapi.com/products`).then(res=>{
        if(res.ok)
        {return res.json()
        }
        else{
          console.log('error')
        }
       })
       .then((data)=>{
        const newProduct =data.find((item)=>item.id===parseInt(id));
        setDetails(newProduct)

       })
          
    

  
    },[id])
    console.log('data is:',details)
  return (
    <Layout>
     
     <div className='p-3 mb-2 bg-info-subtle text-emphasis-info'>
    <h1 className='title'>Product Details</h1>
<div className="row">
<div className="product-list">
{

  <div  className='col-sm-3 mb-3 mb-sm-0'>
      <div className='card'>
      <div className='card-body'> 
  
      <img  className='product-image' src={details.image} alt='details' />
      <h2 className="card-title">{details.title}</h2>
      <p className="card-text">Price:{details.price}$</p>
      <p className="card-text">Category:{details.category}</p>
      
      {/* <button type="button" class="btn btn-success">ADD</button> */}
      <p className="card-text">{details.description}</p>
      </div>
      </div>
      
 
    </div>

}

</div>
</div>

    </div>
   
</Layout>
  )
}

export default ProductDetails
