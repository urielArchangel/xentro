import AdminNav from "@/app/src/FE/admin/miscComponents/AdminNav";
import AdminSideNav from "@/app/src/FE/admin/miscComponents/AdminSideNav";
import ModalContext from "@/app/src/FE/admin/miscComponents/ModalContext";
import { Metadata } from "next";
import React, { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Admin | Xentro - Gateway to UNTRAD Banking",

  robots: { follow: false, index: false },
};


const AdminAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex flex-col bg-[#F1F6FA] h-[100vh] overflow-y-hidden">
      <ModalContext>
        <AdminNav />
        <section className="flex ">
          <AdminSideNav />
          <section
            className=" w-full h-[98vh] bg-[#F1F6FA] py-12 px-8 overflow-y-scroll"
            id="innerAdminPage_id"
          >
            {children}
          </section>
        </section>
      </ModalContext>
    </section>
  );
};

export default AdminAppLayout;
