import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const LogIn = () => {
  // Github, Google, Facebook, and Email + password SignIn start

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gUser, gLoading, gError] = useSignInWithGithub(auth);
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);
  const [signInWithEmailAndPassword, lUser, lLoading, lError] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user || gUser || fUser || lUser) {
      return navigate("/", { replace: true });
    }
  }, [user, gUser, fUser, lUser, navigate]);

  if (loading || gLoading || fLoading || lLoading) {
    return <Loading />;
  }

  if (error || gError || fError || lError) {
    toast.error(error.message || gError.message || fError.message || lError.message, {
      id: "logIn-error",
    });
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  };

  // Github, Google, Facebook, and Email + password SignIn end

  return (
    <div className="card w-96 bg-white mx-auto p-5 mt-5 shadow-xl">
      <h3 className="text-2xl text-center">Please Log In!</h3>
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
        <form onSubmit={handleLogIn} action="">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="email"
              name="email"
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
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <p className="text-md mt-3">
            Create new account{" "}
            <Link className="text-blue-700" to="/sign-up">
              Sign Up
            </Link>
          </p>
          <input type="submit" className="btn mt-3 w-full" value="Log In" />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
