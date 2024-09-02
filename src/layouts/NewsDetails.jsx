import React from "react";
import Header from "../Pages/Shared/Header";
import { Outlet } from "react-router-dom";
import RightSideNav from "../Pages/Shared/RightSideNav";
import Footer from "../Pages/Shared/Footer";

const NewsDetails = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto font-poppins">
        <Header></Header>
        <div className="md:grid grid-cols-4 gap-4">
          <div className="col-span-3">
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

export default NewsDetails;
