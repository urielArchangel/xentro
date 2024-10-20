import React from "react";
import ecosystemstyles from "../css/ecosystem.module.css";
import EcosystemHero from "@/app/src/ecosystem/EcosystemHero";
import JoinCommunity from "@/app/src/FE/homepage/components/JoinCommunity";
import Footer from "../src/FE/footer/Footer";
import EcosystemFeatures from "../src/ecosystem/EcosystemFeatures";

const page = () => {
  return (
    <>
      <main className="body pt-5">
        <EcosystemHero />
        <EcosystemFeatures />
        <JoinCommunity />
        <Footer />
      </main>
    </>
  );
};

export default page;
