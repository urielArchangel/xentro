import React from "react";
import Navbar from "../src/FE/navbar/Navbar";
import Terms from "../src/FE/terms/Terms";
import Footer from "../src/FE/footer/Footer";

const page = () => {
  return (
    <>
      <div className="body pt-5">
        <Navbar />
        <Terms />
        <Footer />
      </div>
    </>
  );
};

export default page;
