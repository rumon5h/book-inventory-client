import React from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div>
            <h1>This is service page.</h1>
        </div>
    );
};

export default Service;