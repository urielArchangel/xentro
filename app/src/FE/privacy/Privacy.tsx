import React from "react";
import homepagestyles from "@/app/css/homepage.module.css";
import Link from "next/link";

const Privacy = () => {
  return (
    <>
      <section className="px-[8%] pt-[15%] min-[769px]:pt-[8%] min-[1500px]:pt-[6%] text-white gilroy-regular">
        <button>
          <Link href="/">
            <span className="text-white text-md md:text-lg flex gap-1 items-center mt-4">
              <svg
                width="17"
                height="18"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_0_2319)">
                  <path
                    d="M7.43611 20.8029C8.11265 21.4795 9.21135 21.4795 9.88788 20.8029C10.5644 20.1264 10.5644 19.0277 9.88788 18.3512L5.91526 14.3839H22.5148C23.4727 14.3839 24.2467 15.1579 24.2467 16.1159V24.7755C24.2467 25.7335 25.0207 26.5075 25.9786 26.5075C26.9366 26.5075 27.7106 25.7335 27.7106 24.7755V16.1159C27.7106 13.2474 25.3833 10.9201 22.5148 10.9201H5.91526L9.88788 6.94745C10.5644 6.27092 10.5644 5.17222 9.88788 4.49568C9.21135 3.81915 8.11265 3.81915 7.43611 4.49568L0.508379 11.4234C-0.168158 12.1 -0.168158 13.1987 0.508379 13.8752L7.43611 20.8029Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_0_2319">
                    <rect
                      width="27.7109"
                      height="27.7109"
                      fill="white"
                      transform="translate(-0.000976562 0.527344)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Back
            </span>
          </Link>
        </button>
        <h1
          className={`${homepagestyles.gradientText} gilroy-black-bold text-3xl md:text-4xl lg:text-5xl min-[1500px]:text-6xl text-center min-[769px]:text-start mb-5 md:mb-10`}
        >
          PRIVACY POLICY
        </h1>
        <div className="text-sm md:text-md lg:text-lg xl:text-xl">
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            The privacy policy herein has been put together to soothingly serve
            concerned parties about how their “Personal Identifiable
            Information” (PII) is being utilized on the web. PII are
            intricacies, whether as a standalone or in combination with external
            information, which uniquely identifies a single individual or a
            group, as stated in the Privacy Act and Information Security. Please
            read and digest our set down policies to comprehend how we intend to
            collect, utilize, protect or process your personal information, in
            correspondence to our platform.
          </p>
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            <span className="block">
              What personal information do you collect from users who visit your
              website or app?
            </span>
            In full adequacy, during platform enrollment or transactional
            activities, you may be required to enter your name, email, location
            or other identifying variables to aid your experience.
          </p>
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            <span className="block">When do you collect information?</span>
            Personal information is being collected when you enroll on our site,
            app or other platform extensions.
          </p>
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            <span className="block">How do you use your information?</span>
            <span className="mb-5 block">
              Collated individually unique information gotten via sign up
              actions, newsletter subscriptions, survey feedback, marketing
              communications or browsing through our website, can be used in the
              following ways:
            </span>
            <span className="block">
              - Provide users with preferred type contents and products that
              should make your experience worthwhile.
            </span>
            <span className="block">
              - Improve website features for better service.
            </span>
            <span className="block">- Expedite transactional dealings.</span>
          </p>
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            <span className="block">How do you protect your information?</span>
            We employ a periodic malware inspection across the board. As such,
            eliminating the use of vulnerability scanning. Furthermore,
            users&apos; personal information is stored in a secure network, with
            limited access to personnel who have satisfactorily sworn to the
            oath of confidentiality. Additionally, all financially sensitive
            information provided is well encrypted using the Secure Socket Layer
            (SSL) framework.
          </p>
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            <span className="block">Do you use Cookies?</span>
            <span className="mb-5 block">
              Yes we do. Firstly, cookies are tiny data traces and files sent by
              a website or service provider to a computer&apos;s hard drive via
              a web browser (if permitted). This enables such a site or service
              vendor to subsequently recognize your browser and identify its
              peculiar information. With previous site activities, customer
              preference can easily be predicted, thus, yielding better service.
              Not only that, we also use cookies to compile aggregate data about
              our site&apos;s traffic and impressions. Shaping our product
              development path for the future.
            </span>
            Considering the aforementioned, we can easily understand user
            preferences for future visits. In all transparency, we could indulge
            a third party vendor to track these information on your behalf. All
            these are choosable, you could have your gadget notify you whenever
            a cookie is sent or have it disabled from your browser settings.
          </p>
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            <span className="block">
              If users disable cookies in their browsers:
            </span>
            Disabling cookies may deter certain features that make your site
            experience more efficient.
          </p>
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            <span className="block">Third-party disclosure</span>
            We don&apos;t and never intend to share or trade your PII to any
            external candidates without prior and clear notice to you. This
            excludes web hosting partners or other parties who oversee the
            website, or offer integral business support services to us, on the
            basis that they jointly agree to maintain the integrity and
            confidentiality of users information. We may feel obliged to
            disclose information as it is appropriate, in compliance with the
            law, policy enforcement or for protection of proprietary rights.
          </p>
          <p className="mb-10 font-semibold tracking-wider md:tracking-wide">
            <span className="block">Contact Us</span>
            You can contact us if you have any questions about our privacy
            policy. <a href="mailto:info@joinxentro.com">info@joinxentro.com</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
