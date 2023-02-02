import React, { useState } from "react";
import { Link } from "react-router-dom";
import heartStopper from "../images/Heartstopper.jpeg";
import myKillerVacation from "../images/My Killer Vacation.jpeg";
import nickAndCharlie from "../images/Nick and Charlie.jpeg";
import packUpTheMoon from "../images/Pack Up the Moon.jpeg";
import termsAndConditions from "../images/Terms and Conditions.jpeg";
import theFinePrint from "../images/The Fine Print.jpeg";

const Services = () => {
  const books = [
    {
      id: 1,
      name: "Heartstopper",
      image: heartStopper,
      price: 25,
      author: "Kristan Higgins",
      available: 200,
    },
    {
      id: 2,
      name: "My Killer Vacation",
      image: myKillerVacation,
      price: 30,
      author: "Kristan Higgins",
      available: 200,
    },
    {
      id: 3,
      name: "Nick and Charlie",
      image: nickAndCharlie,
      price: 12,
      author: "Kristan Higgins",
      available: 200,
    },
    {
      id: 4,
      name: "Pack Up the Moon",
      image: packUpTheMoon,
      price: 17,
      author: "Kristan Higgins",
      available: 200,
    },
    {
      id: 5,
      name: "Terms and Conditions",
      image: termsAndConditions,
      price: 21,
      author: "Kristan Higgins",
      available: 200,
    },
    {
      id: 6,
      name: "The Fine Print",
      image: theFinePrint,
      price: 25,
      author: "Kristan Higgins",
      available: 200,
    },
  ];

  const [quantity, setQuantity] = useState(10);

  return (
    <div>
      <div className="border-2 border-gray-900 rounded-[10px] mx-auto w-[fit-content] mb-10">
        <input
          type="search"
          name="search"
          id="search"
          className="outline-none pl-3 font-bolder  w-[90%] md:w-96"
        />
        <button className="btn outline-none">Search</button>
      </div>
      <div className="grid m-5 gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {books &&
          books.map((book) => (
            <article
              to={`services/${book.id}`}
              className="cursor-pointer shadow-slate-400 hover:border-green-600 grid gap-2 grid-cols-2 shadow-lg p-5 rounded-md border-2 "
              key={book.id}
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
                  defaultValue={quantity}
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
                <Link className="bg-gray-700 uppercase rounded-md py-2 px-5 mt-2 block w-[fit-content]" to={`/books/${book.id}`}>See Details <i className="fa-solid ml-1 fa-arrow-right"></i></Link>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Services;
