import React from "react";
import Privacy from "@/app/src/FE/privacy/Privacy";
import Footer from "@/app/src/FE/footer/Footer";
import { Metadata } from "next";
import privacyCSS from '@/app/css/t&c.module.css'


export const metadata: Metadata = {
  title: "Privacy Policy | Xentro - Gateway to UNTRAD Banking",
  description:
    "Learn how Xentro collects, uses, and safeguards your personal information. Our Privacy Policy outlines our commitment to transparency, data protection, and privacy standards to ensure a secure experience for all users.",
  keywords: [
    "Xentro",
    "privacy policy",
    "data protection",
    "personal information",
    "user data",
    "privacy standards",
    "data security",
    "data privacy",
    "Web3 privacy",
    "information security",
    "blockchain privacy",
    "data transparency",
    "user rights",
    "secure experience",
  ],
  openGraph: {
    title: "Privacy Policy | Xentro - Gateway to UNTRAD Banking",
    description:
      "Understand Xentro's approach to data privacy and security. Our Privacy Policy explains how we protect and handle user information responsibly.",
    url: "https://joinxentro.com/privacy-policy",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy | Xentro - Gateway to UNTRAD Banking",
    description:
      "Learn about Xentro's Privacy Policy, which details our practices for safeguarding and using user data responsibly.",
    card: "summary_large_image",
  },
  robots: { follow: true, index: true },
};
const page = () => {
  return (
    <>
      <div className={privacyCSS.body+ " pt-20 sm:pt-10"}>
        <Privacy />
        <Footer />
      </div>
    </>
  );
};

export default page;
