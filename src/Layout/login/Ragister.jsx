import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';

const Ragister = () => {
    const {createUser} = useContext(AuthContex)
    

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
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
    return (
        <div>
          <div>
           <div  className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Ragister!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
      </div>
    </form>
  </div>
</div> 
        </div>
        </div>
    );
};

export default Ragister;