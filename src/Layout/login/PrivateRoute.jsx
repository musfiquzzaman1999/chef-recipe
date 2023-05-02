import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    
    const {user,loading} =useContext(AuthContex)
    console.log(user)
    const location=useLocation()
    if(loading){
        return <div>loading......</div>
    }
    
    if(user){
        return children;
    }
    
    return <Navigate to='/login'  state={{ from: location }} replace={true}></Navigate >
};

export default PrivateRoute;