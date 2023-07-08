import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Service = () => {
    const { id } = useParams();

    const [book, setBook] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`https://books-rhrr.onrender.com/api/v1/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data?.data))
    }, [id])

    if (!book) {
        return <Loading />
    }
    // console.log(book);
    return (
        book && <article data-aos="zoom-in-up"
            key={book._id}
            to={`services/${book._id}`}
            className="cursor-pointer shadow-slate-400 mx-auto mt-5 max-w-xl  shadow-lg p-5 rounded-md border-2 "
        >
            <div className='grid grid-cols-2 '>
                <div>
                    <img
                        className="rounded-sm h-[270px]"
                        src={book.image}
                        alt={book.name}
                    />
                </div>
                <div>
                    <h3 className="text-xl font-extrabold text-gray-900">
                        {book.name}
                    </h3>
                    <p className="text-gray-600 my-3">by {book.author}</p>
                    <p className="text-green-700 my-2 font-extrabold">
                        {book.available} in stock
                    </p>
                    <p className="text-gray-900 text-3xl my-2 font-extrabold">
                        $ {book.price}
                    </p>

                    <input
                        value={count}
                        className="pl-2 border-2 border-green-500 my-2 rounded-md w-[100px] block outline-none"
                        type="number"
                        name="quantity"
                        id="quantity-input"
                        readOnly
                    />
                    {
                        count >= 1 && <button

                            onClick={() => setCount((prevState) => prevState - 1)}

                            className="btn btn-sm mb-2 mr-5 inline-block">
                            <i className="fa-solid fa-circle-minus"></i>
                        </button>}
                    <button
                        onClick={() => setCount((prevState) => prevState + 1)}
                        className="btn btn-sm ">
                        <i className="fa-solid fa-circle-plus"></i>
                    </button>
                    <button className="btn btn-sm  block">Add To Cart <i className="fa-solid ml-1 fa-cart-arrow-down"></i></button>

                </div>
            </div>
            <p className='mt-5'>{book.description}</p>
        </article>
    );
};

export default Service;