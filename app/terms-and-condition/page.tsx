import React from "react";
import Terms from "../src/FE/terms/Terms";
import Footer from "../src/FE/footer/Footer";

const page = () => {
  return (
    <>
      <div className="body pt-5">
        <Terms />
        <Footer />
      </div>
    </>
  );
};

export default page;
