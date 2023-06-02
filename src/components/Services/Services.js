import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const Services = () => {

  const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://books-rhrr.onrender.com/api/v1/books')
        .then(res => res.json())
        .then(data => setBooks(data?.data))
    },[])
    

  if(!books){
    return <Loading/>;
  }

  return (
    <div>
      
      <div className="grid m-5 gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {books &&
          books?.slice(0,6).map(book => (
            <article data-aos="zoom-in-up"
            key={book._id}
              to={`services/${book._id}`} 
              className="cursor-pointer shadow-slate-400 hover:border-green-600 grid gap-2 grid-cols-2 shadow-lg p-5 rounded-md border-2 "
            >
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
                  defaultValue={1}
                  className="pl-2 border-2 border-green-500 my-2 rounded-md w-[100px] block outline-none"
                  type="number"
                  name="quantity"
                  id="quantity-input"
                />
                <button className="btn btn-sm mb-2 mr-5 inline-block">
                  <i className="fa-solid fa-circle-minus"></i>
                </button>
                <button className="btn btn-sm ">
                  <i className="fa-solid fa-circle-plus"></i>
                </button>
                <button className="btn btn-sm  block">Add To Cart <i className="fa-solid ml-1 fa-cart-arrow-down"></i></button>
                <Link className="bg-gray-700 uppercase rounded-md py-2 px-5 mt-2 block w-[fit-content]" to={`/books/${book._id}`}>See Details <i className="fa-solid ml-1 fa-arrow-right"></i></Link>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Services;
