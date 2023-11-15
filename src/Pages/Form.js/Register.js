import React, { useState } from 'react'
import { Link ,NavLink} from 'react-router-dom';
import Layout from '../../components/Layout/Layout'
import { useNavigate,useLocation } from 'react-router-dom'

const Register = () => {
  const [email,setEmail]=useState('');
    const [username,setuser]=useState('');
    const [password,setPasaword]=useState('');

    const navigate=useNavigate();
    const location=useLocation()

    const submitHand =async(e)=>{
      e.preventDefault();
      console.log("register details:",email,username,password);
      let items={email,username,password};

      try{
        let res=await fetch('https://fakestoreapi.com/users',{
          method:'POST',
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
          },
          body: JSON.stringify(items)

        });
        res=await res.json()
        localStorage.setItem('auth',JSON.stringify(res));
        navigate(location.state || '/');
        if(res){
          console.log('register  successfully...')
        }
        else{
          console.log('register failed...')
        }


      }
      catch(error){
        console.log(error);
      }
    
  }
  return (
    <>
        <Layout>
      
      <div className='form-cointainer card item-center' >
       
       <form onSubmit={submitHand} style={{width: '75%',border:'2px solid black',borderRadius:'10px'}} className='p-2'>
           <h1 className='title text-center'>Register form</h1>

           <div className="mb-3">
         <label htmlFor="exampleInputEmail1" className="form-label">Email</label>    
         <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} required 
         placeholder='Enter Email' id="exampleInputEmail1" aria-describedby="userHelp" />
       </div>

       <div className="mb-3">
         <label htmlFor="exampleInputuser1" className="form-label">User Name</label>    
         <input type="text" className="form-control" value={username} onChange={(e)=>{setuser(e.target.value)}} required 
         placeholder='Enter username' id="exampleInputuser1" aria-describedby="userHelp" />
       </div>
     
       <div className="mb-3 ">
         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
         <input  className="form-control" value={password}  minLength='5'  type='password'
         onChange={(e)=>{setPasaword(e.target.value)}} required
         placeholder='Password' ></input>
         <input type='checkbox' className='d-flex text-light'>
    
         </input>
       </div>
       {/*  */}



      <button type="submit" className="btn btn-primary">Register</button>&nbsp;&nbsp;
   
      <NavLink  to='/login'
            className="nav-link" >Already have a Account </NavLink>

     </form>
     
     
            </div>
    </Layout>
      
    </>
  )
}

export default Register
