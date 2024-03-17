import { Outlet } from "react-router-dom";
import React, { Fragment } from "react";
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Fragment>
      <NavigationMenu />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
