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
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
