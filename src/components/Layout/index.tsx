import { Fragment } from "react";
import type { NextPage } from "next";
import Header from "./Header/Header";

const Layout: NextPage = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
