import React, { ReactNode } from "react";
import Navbar from "@/app/src/FE/navbar/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section  className="overflow-x-hidden">
      <Navbar />
      {children}

    </section>
  );
};

export default layout;
