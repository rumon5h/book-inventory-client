import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { async } from "@firebase/util";

const SignUp = () => {
  // Github, Google, Facebook, and Email, password SignUp start

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, gUser, gLoading, gError] = useSignInWithGithub(auth);
  const [signInWithFacebook, fUser, fLoading, fError] =
    useSignInWithFacebook(auth);
  const [createUserWithEmailAndPassword, cUser, cLoading, cError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, uError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user || gUser || fUser || cUser) {
      return navigate("/", { replace: true });
    }
  }, [user, gUser, fUser, cUser, navigate]);

  if (loading || gLoading || fLoading || cLoading || updating) {
    return <Loading />;
  }

  if (error || gError || fError || cError || uError) {
    toast.error(
      error.message ||
        gError?.message ||
        fError?.message ||
        cError?.message ||
        uError?.message,
      {
        id: "signUp-error",
      }
    );
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(e);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      return toast.error("Password did not match!", { id: "password-error" });
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  // Github, Google, Facebook, and Email, password SignUp end

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
        <form onSubmit={handleSignUp}>
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
              name="confirmPassword"
              id="confirm-password"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <p className="text-md mt-3">
            Already have an account?{" "}
            <Link className="text-blue-700" to="/log-in">
              Log In
            </Link>
          </p>

          <input type="submit" className="btn mt-3 w-full" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
