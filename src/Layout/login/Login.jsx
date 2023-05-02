import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {signIn,googleSignIn}= useContext(AuthContex)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handelLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        
        const email= form.email.value;
        const password=form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then((result) => {
            // Signed in 
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true })
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
        
    }

    const handelGoogle =()=>{
        googleSignIn()
        .then((result) => {
           
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true })
            
          }).catch((error) => {
           
            const errorCode = error.code;
            const errorMessage = error.message;
           
            const email = error.customData.email;
          
          });
    }

    
    return (
        <div>
        <form onSubmit={handelLogin} className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center ">
  <h1 className="text-5xl font-bold">Login now!</h1>
  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
  
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
 

    <FaGithub onClick={handelGoogle} ></FaGithub> <FaGoogle></FaGoogle>
    

    

    <div >
        <p className='mt-32'>If you new this site plz <Link to='/ragister'><button className="btn btn-link"> ragister </button></Link></p>
    </div>
    
   
  </div>
</div>
</div>
</form>


    </div>
    );
};

export default Login;