import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn,googleSignIn,githubSignIn,user}= useContext(AuthContex)
    const [error,setError]=useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if(user?.uid){
        return <Navigate to={from}></Navigate>
    }
    const handelLogin =(event)=>{
        
        event.preventDefault();
        const form = event.target;
        
        const email= form.email.value;
        const password=form.password.value;
        console.log(email,password)
        signIn(email,password)

       
        .then((result) => {
            setError('')
            // Signed in 
            const loggedUser = result.user;
            console.log(loggedUser)
            // navigate(from, { replace: true })
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(error.message)
           
          });
        
    }

    const handelGoogle =()=>{
        googleSignIn()
        .then((result) => {
           
            const user = result.user;
            console.log(user)
           
            
            // navigate(from, { replace: true })
            
          }).catch((error) => {
           
            const errorCode = error.code;
            const errorMessage = error.message;
           
            const email = error.customData.email;
          
          });
    }
const handelGithub=()=>{
    githubSignIn()
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        // navigate(from, { replace: true })
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
}
    
    return (
        <div>
        <form onSubmit={handelLogin} className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center ">
  <h1 className="text-5xl font-bold">Login now!</h1>
  <p className="py-6">Enter your email and password to access your account and start using all the features of our website</p>
  
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
 

   <div>
    <div className='text-center'>
        <h1>Signin with Social Account</h1>
    </div>
    <div className='flex mx-32 gap-3'>
        <button> <FaGithub onClick={handelGithub} className='text-3xl' ></FaGithub></button> 
        <button><FaGoogle onClick={handelGoogle} className='text-3xl'></FaGoogle></button>
    </div>
   </div>
    

    

    <div >
        <p >If you new this site plz <Link to='/ragister'><button className="btn btn-link"> ragister </button></Link></p>
    </div>
    {
       error && <p className='text-orange-800'>Plz provide valid information or password</p>
    }
    
   
  </div>
</div>
</div>
</form>


    </div>
    );
};

export default Login;