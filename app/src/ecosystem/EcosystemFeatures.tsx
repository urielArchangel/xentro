import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import Image from "next/image";
import token from "@/app/images/token.png";
import exchange from "@/app/images/exchange.png";
import pay from "@/app/images/Pay.png";
import loans from "@/app/images/loans.png";
import bridge from "@/app/images/bridge.png";
import funjies from "@/app/images/funjies.png";

const EcosystemFeatures = () => {
  return (
    <>
      <EcosystemFeaturesTemplate
        title="Token"
        description="The Xentro Token is the cornerstone of our ecosystem, designed for seamless transactions and staking opportunities. Its deflationary model ensures long-term value appreciation, providing ultimate benefits to early adopters and long-term holders."
        image={token}
      />
      <AlternateEcosystemFeaturesTemplate
        title="Decentralized Exchange"
        image={exchange}
        description="Xentro's Decentralized Exchange offers a secure and intuitive platform for trading a diverse range of digital assets with minimal fees. Its advanced liquidity protocols and user-friendly interface ensure an unparalleled trading experience."
      />
      <EcosystemFeaturesTemplate
        title="Bridge"
        description="Xentro Bridge facilitates seamless interoperability between different blockchains, allowing for effortless asset transfers and interactions across various networks. Its robust security features and rapid transaction speeds provide a seamless user experience and unlock new opportunities for decentralized finance."
        image={bridge}
      />
      <AlternateEcosystemFeaturesTemplate
        title="Funjies"
        image={funjies}
        description="Xentro's Decentralized Exchange offers a secure and intuitive platform for trading a diverse range of digital assets with minimal fees. Its advanced liquidity protocols and user-friendly interface ensure an unparalleled trading experience."
      />
      <EcosystemFeaturesTemplate
        title="Pay"
        description="Xentro Pay revolutionizes payments by enabling instant, borderless transactions with minimal fees. It integrates effortlessly with existing financial systems, making it a preferred choice for both consumers and merchants seeking efficiency and security."
        image={pay}
      />
      <AlternateEcosystemFeaturesTemplate
        title="Loans"
        image={loans}
        description="Xentro Loans provides a decentralized platform for borrowing and lending, leveraging smart contracts to offer competitive interest rates and flexible terms. Its risk management features ensure safe and profitable lending opportunities for all participants."
      />
    </>
  );
};

interface FeatureProps {
  title: string;
  description: string;
  image: any;
}

export const EcosystemFeaturesTemplate: React.FC<FeatureProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <>
      <div className="px-[8%]">
        <div className="grid grid-cols-1 min-[769px]:grid-cols-2">
          <div
            className={`${
              title === "Bridge" ? "scale-[1.2] max-[450px]:scale-[1]" : ""
            } ${
              title === "Pay" ? "scale-[1.4] max-[450px]:scale-[1]" : ""
            } flex justify-center mb-10 max-[600px]:scale-[0.8] ${
              homepagestyles.scale_custom
            }`}
          >
            <Image src={image} alt="token" width={300} height={300} />
          </div>
          <div className="flex justify-center flex-col text-white text-center min-[769px]:text-end">
            <h3 className="text-2xl sm:text-3xl md:text-4xl gilroy-bold mb-5">
              <span className={`${homepagestyles.gradientText}`}>XENTRO</span>{" "}
              {title}
            </h3>
            <p className="gilroy-regular text-sm sm:text-md md:text-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const AlternateEcosystemFeaturesTemplate: React.FC<FeatureProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <>
      <div className="p-[8%]">
        <div className="grid grid-cols-1 min-[769px]:grid-cols-2">
          <div className="flex justify-center flex-col text-white text-center min-[769px]:text-start">
            <h3 className="text-2xl sm:text-3xl md:text-4xl gilroy-bold mb-5">
              <span className={`${homepagestyles.gradientText}`}>XENTRO</span>{" "}
              {title}
            </h3>
            <p className="gilroy-regular text-sm sm:text-md md:text-xl">
              {description}
            </p>
          </div>
          <div
            className={`flex justify-end ${
              title === "Funjies" && "min-[769px]:translate-x-10 scale-[1.2]"
            } flex justify-center mb-10 order-first min-[769px]:order-last max-[600px]:scale-[0.8] ${
              homepagestyles.scale_custom
            }`}
          >
            <Image src={image} alt="token" width={400} height={300} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EcosystemFeatures;
