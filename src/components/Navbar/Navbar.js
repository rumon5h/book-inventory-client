import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import './Navbar.css';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='sticky z-10 top-0'>
            <section className="top-nav">      
                <Link to='/'>
                    Book World
                </Link>
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <div className="menu">
                    <Link to="/home">Home</Link>
                    <Link to="/books">Books</Link>
                    {
                      user?.uid && <Link to="/dashboard">Dashboard</Link>
                    }

                   {
                    user?.uid ?  <Link onClick={() => signOut(auth)} className="" to="/log-in">
                    LogOut
                  </Link> :  <Link className="" to="/log-in">
                      LogIn
                    </Link>
                   }
                </div>
            </section>
        </div>
  );
};

export default Navbar;
