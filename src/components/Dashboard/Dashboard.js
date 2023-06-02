import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";


const Dashboard = () => {
  const [user] = useAuthState(auth);

  

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className="text-2xl font-bold text-purple-500">Welcome to your dashboard</h1>
        <Outlet/>
        
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="flex flex-col gap-4 text-lg p-4 w-48 bg-[#222120] text-white">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to='/dashboard/profile'>Profile</Link>
          </li>
          
          <li>
            <Link to="/dashboard/mybooks">My Books</Link>
          </li>

          {
            user?.uid && <li>
            <Link to="/dashboard/favorite">Favorite Books</Link>
          </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;