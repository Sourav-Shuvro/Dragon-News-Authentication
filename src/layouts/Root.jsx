import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Navbar from "../Pages/Shared/Navbar";
import LeftSideNav from "../Pages/Shared/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav";
import Footer from '../Pages/Shared/Footer'

const Root = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto font-poppins">
        <Header></Header>
        <Navbar></Navbar>
        <div className="md:grid grid-cols-4 gap-4">
          <div className="grid-cols-1">
            <LeftSideNav></LeftSideNav>
          </div>
          <div className="col-span-2">
            <Outlet></Outlet>
          </div>
          <div className="grid-cols-1">
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
