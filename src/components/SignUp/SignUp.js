import React, { useEffect } from "react";
import auth from "../../firebase.init";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from "../Loading/Loading";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gUser, gLoading, gError] = useSignInWithGithub(auth);
  const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
  }

  useEffect(() => {
    if(loading || gLoading || fLoading){
      return <Loading/>
    }
  },[loading, gLoading, fLoading])

  useEffect(() => {
    if(user || gUser || fUser) {
      return navigate("/", {replace : true});
    }
  },[user, gUser, fUser, navigate]);

  return (
    <div className="card w-96 bg-white mx-auto p-5 mt-5 shadow-xl">
      <h3 className="text-2xl text-center">Create New Account!</h3>
      <div className="mx-auto mt-4">
        <i
        onClick={() => signInWithGoogle()}
          title="Continue With Google"
          className="fa-brands text-5xl mr-3 text-red-600 fa-google cursor-pointer"
        ></i>

        <i
        onClick={() => signInWithGithub()}
          title="Continue With Github"
          className="fa-brands text-5xl mr-3 fa-square-github cursor-pointer"
        ></i>

        <i
        onClick={() => signInWithFacebook()}
          title="Continue With Facebook"
          className="fa-brands text-5xl text-blue-700 fa-facebook cursor-pointer"
        ></i>
      </div>
      <div className="card-body">
        <form onSubmit={handleSignUp} >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
            required
              type="text"
              name="name"
              id="name"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
           
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            required
              type="email"
              name="email"
              id="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            required
              type="password"
              name="password"
              id="password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
            required
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <p className="text-md mt-3">Already have an account? <Link className="text-blue-700" to="/log-in">Log In</Link></p>

          <input type="button" className="btn mt-3 w-full" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
