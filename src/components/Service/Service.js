import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Service = () => {
    const {id} = useParams();
    console.log(id);
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://books-rhrr.onrender.com/api/v1/books/${id}`)
        .then(res => res.json())
        .then(data => setBook(data))
    },[id])

    if(!book){
        return <Loading/>
    }
    console.log(book);
    return (
        <div>
            <h1>This is service page.</h1>
        </div>
    );
};

export default Service;