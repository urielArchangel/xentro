import React from "react";
import Navbar from "../src/FE/navbar/Navbar";
import Privacy from "../src/FE/privacy/Privacy";
import Footer from "../src/FE/footer/Footer";

const page = () => {
  return (
    <>
      <div className="body pt-5">
        <Navbar />
        <Privacy />
        <Footer />
      </div>
    </>
  );
};

export default page;
