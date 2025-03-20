import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="sc-1ryyl0a-1 Ghuwm">
      <footer className="bg-black text-white w-screen min-h-screen px-[100px] py-[180px] relative z-[3]">
        <div className="flex gap-[40px]">
          <div className="flex flex-col w-full">
            <Image
              width={100}
              height={100}
              src="https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/footer-logo.png"
              alt="cred logo"
              data-loaded="true"
            />
            <Image
              width={310}
              height={310}
              className="mt-auto mb-[20px]"
              alt="security logo"
              src="https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png"
              data-loaded="true"
            />
            <div className="text-white opacity-80 text-[20px] font-semibold leading-[31.5px] tracking-[0.8px] ">
              complete security. no asterisks.
            </div>
            <div className="pt-[50px] max-w-[500px]  text-white opacity-30 text-[20px] font-medium leading-[32px] tracking-[0.2px]">
              CRED encrypts all data and transactions to ensure a completely
              secure experience for our members.
            </div>
          </div>
          <div className="w-full flex flex-col gap-[100px]">
            <div className="relative w-full">
              <div className="absolute top-[-18px] left-[30px] px-[15px] py-[5px] flex justify-center items-center border border-[rgba(255,255,255,0.2)] bg-black  text-[14px] font-bold leading-[24px] tracking-[4px] uppercase text-center text-white">
                now live
              </div>
              <Image
                width={100}
                height={100}
                alt="footer-image"
                src="https://web-images.credcdn.in/v2/_next/assets/images/launch-banners/cards/now-live-wide.png?tr=q-95"
                className="w-full border border-[rgba(255,255,255,0.2)] cursor-pointer"
              />
            </div>
            <div className="w-full flex flex-[0_1_33.33%] gap-[25px]">
              <div className="w-full flex flex-col gap-[45px]">
                <div className="break-words">
                  <div className=" text-[20px] font-semibold leading-[32px] tracking-[6px] text-left text-[rgba(255,255,255,0.8)]">
                    UPGRADES
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://cred.club/money"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        CRED money
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/mint"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        CRED mint
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/garage"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        CRED garage
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/escapes"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        CRED escapes
                      </a>
                    </div>
                  </div>
                </div>
                <div className="break-words">
                  <div className=" text-[20px] font-semibold leading-[32px] tracking-[6px] text-left text-[rgba(255,255,255,0.8)]">
                    PAYMENTS
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://cred.club/cred-pay"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        Scan &amp; Pay
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/tap"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        Tap to Pay
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/pay-via-upi"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        Pay anyone
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/upi-on-credit"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        RuPay cards on UPI
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-[45px]">
                <div className="break-words">
                  <div className=" text-[20px] font-semibold leading-[32px] tracking-[6px] text-left text-[rgba(255,255,255,0.8)]">
                    COMPANY
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://cred.club/about"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        about CRED
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://careers.cred.club/openings"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        careers
                      </a>
                    </div>
                  </div>
                </div>
                <div className="break-words">
                  <div className=" text-[20px] font-semibold leading-[32px] tracking-[6px] text-left text-[rgba(255,255,255,0.8)]">
                    INSIDER PERKS
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://cred.club/ipl"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        upgrade to UPI
                      </a>
                    </div>
                  </div>
                </div>
                <div className="break-words">
                  <div className=" text-[20px] font-semibold leading-[32px] tracking-[6px] text-left text-[rgba(255,255,255,0.8)]">
                    DESIGN
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://cred.club/neopop"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        NeoPOP
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/design"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        manifesto
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-[45px]">
                <div className="break-words">
                  <div className=" text-[20px] font-semibold leading-[32px] tracking-[6px] text-left text-[rgba(255,255,255,0.8)]">
                    RESOURCES
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://cred.club/cred-pay/onboarding"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        partner with us
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/calculators"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        calculators
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/articles"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        articles
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://engineering.cred.club"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        tech blog
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/check-your-credit-score/articles"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        credit score guide
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/credit-card-bill-payment-online/articles"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        credit card payment guide
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/customer-care"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        customer care
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://zfrmz.in/10ASsFdqjAnCiBMpakMX"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        Dreampurse (HipBar) wallet refund form
                      </a>
                    </div>
                  </div>
                </div>
                <div className="break-words">
                  <div className=" text-[20px] font-semibold leading-[32px] tracking-[6px] text-left text-[rgba(255,255,255,0.8)]">
                    POLICY
                  </div>
                  <div>
                    <div>
                      <a
                        href="https://cred.club/transaction-and-user-verification-policy"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        transaction &amp; user verification
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/privacy#compliance-with-google-oauth-api-scopes"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        Google API disclosure{" "}
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/upi-faqs"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        UPI FAQ &amp; grievances
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/return-policy"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        returns and refunds
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/security"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        security
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://web-assets.cred.club/assets/docs/eop.pdf"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        equal opportunity policy
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/investor-relations"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        investor relations
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://cred.club/legal/other-disclosures"
                        target="_blank"
                        className=" text-[20px] font-medium leading-[44px] tracking-[0.3px] text-left text-[rgba(255,255,255,0.3)]"
                      >
                        other disclosures
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] w-full pt-[50px]">
          <div className="border-t border-white opacity-20 w-full mx-auto"></div>
          <div className="flex w-full">
            <div className="w-full  text-[20px] font-medium leading-[30px] tracking-[0.1px] text-start text-white opacity-25">
              copyright © 2020-24 Dreamplug Technologies Pvt Ltd.
            </div>
            <div className="w-full text-end">
              <a
                href="https://cred.club/privacy"
                target="_blank"
                className=" text-[20px] w-full font-medium leading-6 tracking-[0.1px] text-end text-white mb-[20px] opacity-30 px-[15px] first:pr-0 first:pl-[15px] border-r border-[#f6f6f6]"
              >
                privacy policy
              </a>
              <a
                href="https://cred.club/terms"
                target="_blank"
                className=" text-[20px] w-full font-medium leading-6 tracking-[0.1px] text-end text-white mb-[20px] opacity-30 px-[15px] border-r border-[#f6f6f6]"
              >
                terms and conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
