import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';
import Active from './active/Active';



const Navbar = () => {
  const {user,logOut} = useContext(AuthContex)
  console.log(user)
  // recive user and logout from authcontex
 
    const handelLogout=()=>{
        logOut()
        .then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        
    }
    return (
        <div >
           <div className="navbar bg-neutral-600 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-green-800">
      <Active to='/'> <li><a>Home</a></li></Active>
      
      <Active to='/blog'> <li><a>Blog</a></li></Active>
   
      <Active to='/recipes'> <li><a>New Recipes</a></li></Active>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Plateful</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <Active to='/'> <li><a>Home</a></li></Active>
      
     <Active to='/blog'> <li><a>Blog</a></li></Active>
   
     <Active to='/recipes'> <li><a>New Recipes</a></li></Active>
    </ul>
  </div>
  {/* <div className="tooltip" data-tip="hello">
  <button className="btn">Hover me</button>
</div> */}
 
  <div className="navbar-end" >
    {/* using ternary operator */}
       {
        user && <label className=" avatar tooltip tooltip-bottom mr-4" data-tip={user.displayName} >
        <div className="w-10 rounded-full " >
            <img src={ user.photoURL } />
        </div>
    </label>
      }
    
    
    {
      user ?<Link ><a className="btn" onClick={handelLogout}>Logout</a></Link>:
  
      <Link to='/login' ><a className="btn">Login</a></Link>
    }
  </div>
  
</div>
        </div>
    );
};

export default Navbar;