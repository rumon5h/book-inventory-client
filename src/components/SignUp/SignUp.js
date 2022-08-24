import React from "react";

const SignUp = () => {
  return (
    <div class="card w-96 bg-white mx-auto p-5 mt-5 shadow-xl">
      <h3 className="text-2xl text-center">Create New Account!</h3>
      <div className="mx-auto mt-4">
        <i
          title="Continue With Google"
          class="fa-brands text-5xl mr-3 text-green-600 fa-google cursor-pointer"
        ></i>
        <i
          title="Continue With Github"
          class="fa-brands text-5xl mr-3 fa-square-github cursor-pointer"
        ></i>
        <i
          title="Continue With Facebook"
          class="fa-brands text-5xl text-blue-700 fa-facebook cursor-pointer"
        ></i>
      </div>
      <div class="card-body">
        <form action="">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
            required
              type="text"
              name="name"
              id="name"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
           
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
            required
              type="email"
              name="email"
              id="email"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
            required
              type="password"
              name="password"
              id="password"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Confirm Password</span>
            </label>
            <input
            required
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <input type="button" className="btn mt-3 w-full" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
