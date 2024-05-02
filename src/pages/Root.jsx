import React from "react";
import { Outlet } from "react-router-dom";
import ScrollRestore from "../components/ScrollRestore/ScrollRestore";
import "../styles/global.scss";
import ScrollHandler from "../components/Profile/Videos/Shorts/ScrollHandler";

const Root = () => {
  return (
    <>
      <wc-toast theme="dark"></wc-toast>
      <div className="App w-full md:max-w-sm md:mx-auto ">
        <ScrollHandler />
        <ScrollRestore />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
