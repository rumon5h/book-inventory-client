import React from "react";
import bannerImage from '../images/banner.png';

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-white">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          class="w-full rounded-lg shadow-2xl"
          alt=""
        />
        <div className="w-full text-gray-900">
          <h1 class="text-5xl font-bold">
            Proud Independent Booksellers Since 1999!
          </h1>
          <p class="py-6">
          Reading is good for you because it improves your focus, memory, empathy, and communication skills. It can reduce stress, improve your mental health, and help you live longer. Reading also allows you to learn new things to help you succeed in your work and relationships.
          </p>
          <div>
          
          </div>
          <button class="btn btn-active">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
