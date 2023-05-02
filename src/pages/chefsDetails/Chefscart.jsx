import React from 'react';
import { useParams } from 'react-router-dom';

const Chefscart = () => {
    const {id}=useParams();
    
    return (
        <div>
            <h1>coming soon.....{id}</h1>
        </div>
    );
};

export default Chefscart;