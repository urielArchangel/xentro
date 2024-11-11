import React from "react";
import EcosystemHero from "@/app/src/FE/ecosystem/EcosystemHero";
import JoinCommunity from "@/app/src/FE/homepage/components/JoinCommunity";
import Footer from "@/app/src/FE/footer/Footer";
import EcosystemFeatures from "@/app/src/FE/ecosystem/EcosystemFeatures";
import { Metadata } from "next";
import ecosystemcss from '@/app/css/ecosystem.module.css'

export const metadata: Metadata = {
  title: "Ecosystem | Xentro - Gateway to UNTRAD Banking",
  description:
    "Explore the Xentro ecosystem, featuring decentralized exchange, token staking, bridging, payments, loans, and more. Xentro offers seamless financial services, empowering users to interact effortlessly across multiple blockchains.",
  keywords: [
    "Xentro",
    "ecosystem",
    "token staking",
    "decentralized exchange",
    "crypto bridge",
    "blockchain payments",
    "decentralized loans",
    "crypto ecosystem",
    "Web3",
    "crypto finance",
    "digital assets",
    "borderless transactions",
    "deflationary token",
    "liquidity protocols",
    "secure trading",
    "DeFi opportunities",
  ],
  openGraph: {
    title: "Ecosystem | Xentro - Gateway to UNTRAD Banking",
    description:
      "Discover the Xentro ecosystem, designed to offer secure, borderless financial services and seamless interoperability across multiple blockchains.",
    url: "https://www.joinxentro.com/ecosystem",
    type: "website",
  },
  twitter: {
    title: "Ecosystem | Xentro - Gateway to UNTRAD Banking",
    description:
      "Discover the Xentro ecosystem, offering innovative financial tools including staking, decentralized exchange, and secure asset bridging across blockchains.",
    card: "summary_large_image",
  },
  robots: { follow: true, index: true },
};


const page = () => {
  return (
    <>
      <main className={ecosystemcss.body+ " pt-20 sm:pt-16 px-4"}>
        <EcosystemHero />
        <EcosystemFeatures />
        <JoinCommunity />
        <Footer />
      </main>
    </>
  );
};

export default page;
