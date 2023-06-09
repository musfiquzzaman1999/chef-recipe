import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Ragister = () => {
    const {createUser,user} = useContext(AuthContex)
    const [error,setError]=useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    if(user?.uid){
        return <Navigate to={from}></Navigate>
    }
    

    const handelRagister =(event)=>{
        event.preventDefault();
        const from = event.target;
        const name =from.name.value;
        const photo = from.photo.value;
        const email= from.email.value;
        const password=from.password.value;
        console.log(name,photo,email,password);
        createUser(email,password)
        .then((result) => {
            // Signed in 
            const createUser = result.user;
            console.log(createUser)
            updateUserData(result.user,name,photo)
            location('/login')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(errorMessage)
          });
          const updateUserData=(user,name,photo)=>{
            updateProfile(user,{
                
                displayName: name, photoURL: photo
            })
            .then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
          }
    }
    return (
        <div>
          <div>
           <div  className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Ragister!</h1>
      <p className="py-6">Sign up now to become part of our community and enjoy all the benefits of membership</p>
    </div>
    <form onSubmit={ handelRagister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo</span>
          </label>
          <input type="text" name='photo' placeholder="photo" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" >ragister</button>
        </div>
        <div>
        <p>Have Already An Account? <Link to='/login'><button className="btn btn-link"> login </button></Link></p>
    </div>
    {
       error && <p className='text-orange-800'>{error}</p>
    }
      </div>
    </form>
  </div>
</div> 
        </div>
        </div>
    );
};

export default Ragister;