import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../componentens/Header/Navbar";
import Footer from "../../componentens/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
