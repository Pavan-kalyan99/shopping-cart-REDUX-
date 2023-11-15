
import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';
//import axios from 'axios';

//
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/CartSlice';

const ProductsData = ({id,name,price,image}) => {
    // const [product,setProduct]=useState([]);
    // useEffect(()=>{
    //     axios.get('https://fakestoreapi.com/products?limit=4')
              
    //             .then(response=>setProduct(response.data))
    //   },[])

const dispatch=useDispatch();
const addToCart=()=>{
  dispatch(cartActions.addToCart({
    id:id,
    name:name,
    price:price,
    image:image,



  }))}
  return (
  
 
    
    <div className='card'>
        <div className="card-body">
          <Link to={`/products/${id}`}>
          <img src={image} className='product-image' alt='images'/>
            </Link>  
            <h2 className='card-title'>{name}</h2>
            <p className='card-text'>{price}$</p>
             <button type="button" class="btn btn-success" onClick={addToCart}>Add to Cart</button>

    {
    //   product.map((items)=>{
    //     return(<Link to={`/products/${items.id}`} key={items.id} className='col-sm-3 mb-3 mb-sm-0'>
    //       <div className='card'>
    //       <div className='card-body'> 
      
    //       <img  className='product-image' src={items.image} alt='items' />
    //       <h2 className="card-title">{items.title}</h2>
    //       <p className="card-text">Price:{items.price}$</p>
    //       {/* <p className="card-text">{items.category}</p> */}
    //       {/* <button type="button" class="btn btn-info" onClick={()=>navigate(`/products/${items.id}`)}>Details</button>&nbsp;&nbsp; */}
    //       <button type="button" class="btn btn-success" onClick={addToCart}>ADD</button>
    //       {/* <p className="card-text">{items.description}</p> */}
    //       </div>
    //       </div>
          
     
    //     </Link>)
    //   })
    }
  
  </div>
      </div>
      
    
  )
}

export default ProductsData
