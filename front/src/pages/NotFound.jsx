import React from "react";
import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout hasSidebar={false}>
      <div className="d-flex mt-5 w-100">
        <div className="text-center w-100">
          <h1>404 Page</h1>
          <h3 className="mt-4">
            Not Found! <i className="bi bi-emoji-frown"></i>
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
