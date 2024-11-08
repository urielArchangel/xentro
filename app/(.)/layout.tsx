import React, { ReactNode } from "react";
import Navbar from "@/app/src/FE/navbar/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
};

export default layout;
