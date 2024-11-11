import Footer from "@/app/src/FE/footer/Footer";
import Terms from "@/app/src/FE/terms/Terms";
import { Metadata } from "next";
import React from "react";

import tandCcSS from '@/app/css/t&c.module.css'

export const metadata: Metadata = {
  title: "Terms and Conditions | Xentro - Gateway to UNTRAD Banking",
  description:
    "Review the Terms and Conditions for using the Xentro platform. By accessing or using our services, you agree to our rules, guidelines, and responsibilities as outlined. Ensure you understand your rights and obligations for a secure experience.",
  keywords: [
    "Xentro",
    "terms and conditions",
    "user agreement",
    "service terms",
    "platform rules",
    "user responsibilities",
    "Xentro policies",
    "usage guidelines",
    "legal terms",
    "user rights",
    "obligations",
    "blockchain terms",
    "crypto platform terms",
    "terms of use",
  ],
  openGraph: {
    title: "Terms and Conditions | Xentro - Gateway to UNTRAD Banking",
    description:
      "Understand the terms governing your use of Xentro's platform. By engaging with our services, you agree to abide by our outlined conditions.",
    url: "https://www.joinxentro.com/terms-and-conditions",
    type: "website",
  },
  twitter: {
    title: "Terms and Conditions | Xentro - Gateway to UNTRAD Banking",
    description:
      "Review the Terms and Conditions for using Xentro's platform. Know your rights, responsibilities, and our policies to ensure a secure experience.",
    card: "summary_large_image",
  },
  robots: { follow: true, index: true },
};

const page = () => {

  return (
    <>
      <div className={tandCcSS.body+ " pt-20 sm:pt-10"}>
        <Terms />
        <Footer />
      </div>
    </>
  );
};

export default page;
