import React from "react";
import ecosystemstyles from "../css/ecosystem.module.css";
import EcosystemHero from "@/app/src/FE/ecosystem/EcosystemHero";
import JoinCommunity from "@/app/src/FE/homepage/components/JoinCommunity";
import Footer from "@/app/src/FE/footer/Footer";
import EcosystemFeatures from "@/app/src/FE/ecosystem/EcosystemFeatures";

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
