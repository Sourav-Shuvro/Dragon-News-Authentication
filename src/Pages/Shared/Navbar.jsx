import React, { useContext } from "react";
import user from "../../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import './Navbar.css'

const Navbar = () => {

  const {users, logOut} = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then(()=>{})
    .catch( error =>{})

  }
  return (
    <div>
      <div
        className="navbar font-poppins"
        style={{ color: "#706F6F" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Career</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/career'>Career</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="w-10 rounded-full me-2">
            <img alt="Tailwind CSS Navbar component" src={user} />
          </div>
          {
            users ? <Link className="btn btn-neutral"><button onClick={handleLogout}>Logout</button></Link>
            : 
            <NavLink to="/login" className="btn btn-neutral">Login</NavLink>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
