import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/Tg8xBdG/banner.png"
          className="w-full rounded-lg shadow-2xl"
          alt=""
        />
        <div className="w-full text-gray-900">
          <h1 className="text-5xl font-bold">
            Proud Independent Booksellers Since 1999!
          </h1>
          <p className="py-6">
          Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.
          </p>
          <div>
          
          </div>
          <button className="btn btn-active">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
