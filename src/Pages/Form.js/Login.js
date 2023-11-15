import React,{useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import '../../PageStyles/Pages.css'
import { useNavigate,useLocation } from 'react-router-dom'
//import axios from 'axios'
const Login = () => {
    const [username,setuser]=useState('');
    const [password,setPasaword]=useState('');
    const navigate=useNavigate();
    const location=useLocation()

    const submitHand =async(e)=>{
        e.preventDefault();
        console.log(username,password);
        let items={username,password};

        try{
          let res=await fetch('https://fakestoreapi.com/auth/login',{
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
            console.log('login successfully...')
          }
          else{
            console.log('login failed...')
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
           <h1 className='title text-center'>Login form</h1>

     
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
      
    
       
       </div>
   <div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>

       {/*  */}



      <button type="submit" className="btn btn-primary">Login</button>&nbsp;&nbsp;
       <Link type="submit"  to='/forget-password'>forget Password?</Link>
      <NavLink  to='/register'
            className="nav-link" >Create New Account</NavLink>

     </form>
     
     
            </div>
    </Layout>
    </>
  )
}

export default Login
