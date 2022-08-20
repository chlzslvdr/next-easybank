import { Fragment } from "react";
import Header from "./Header/index";
import Footer from "./Footer/index";

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
