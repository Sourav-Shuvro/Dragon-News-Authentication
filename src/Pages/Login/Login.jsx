import React, { useContext } from "react";
import Navbar from "../Shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from '../Shared/Footer'
import { AuthContext } from "../../UserContext/UserContext";

const Login = () => {

  const navigate = useNavigate();
  const {loginUser} = useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Login Existing User 
    loginUser(email, password)
    .then( result =>{
      console.log(result.user);
      form.reset();
      navigate('/')
    })
    .catch( error => console.error(error)
    )
  }
  return (
    <div className='className="p-4 font-poppins bg-base-200 min-h-screen'>
      <Navbar></Navbar>
      <div className="text-center mx-auto my-4 py-4 rounded-lg" style={{width: '50%', backgroundColor: 'white'}}>
            <h1 className="text-3xl font-bold mt-4">Login your account</h1>
            <div className="card mx-10">
            <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Email Address</span>
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="input input-bordered bg-base-200"
                    required
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Password</span>
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered bg-base-200"
                    required
                />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-neutral">Login</button>
                <label className="label">
                    <p>Don’t Have An Account ? <Link to='/register' className="link link-hover" style={{color:'tomato'}}>Register</Link></p>
                </label>
                </div>
            </form>
            </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
