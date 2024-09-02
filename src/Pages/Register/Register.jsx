import React, { useContext } from "react";
import Navbar from "../Shared/Navbar";
import Footer from '../Shared/Footer'
import { AuthContext } from "../../UserContext/UserContext";
import { Link } from "react-router-dom";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  const handleRegister = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password)

    createUser(email, password)
    .then( result =>{
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch( error => console.error(error))
  }

  return (
      <div className='className="p-4 font-poppins bg-base-200 min-h-screen'>
        <Navbar></Navbar>
        <div
          className="text-center mx-auto mt-4 py-4 rounded-lg"
          style={{ width: "50%", backgroundColor: "white" }}
        >
          <h1 className="text-3xl font-bold mt-4">Register your account</h1>
          <div className="card mx-10">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  className="input input-bordered bg-base-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered bg-base-200"
                  required
                />
              </div>
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
                <Link to='/'><button className="btn btn-neutral">Register</button></Link>
              </div>
            </form>
          </div>
        </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
      </div>

  );
};

export default Register;
