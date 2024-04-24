import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children, hasSidebar = true }) => {
  return (
    <>
      <Header />
      <main className="min-vh-100 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-9">{children}</div>
            <div className="col-12 col-md-4 col-lg-3">
              {hasSidebar && <Sidebar />}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
