"use client";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <>
      <div className="w-screen relative bg-[radial-gradient(63.85%_195.77%_at_50.93%_100%,_rgb(17,17,17)_0%,_rgb(0,0,0)_100%)] border-t border-b border-t-[rgba(255,255,255,0.3)] border-b-[rgba(255,255,255,0.3)] border-l-0 border-r-0">
        <div
          onClick={handleToggle}
          className=" cursor-pointer h-[20vh] text-[30px] font-medium leading-[39.33px] tracking-[8.4px] flex justify-center items-center text-[rgba(255,255,255,0.7)]"
        >
          FREQUENTLY ASKED QUESTIONS
          <div className="border-none bg-transparent text-transparent flex justify-center items-center">
            <Image
              width={22}
              height={22}
              src="https://web-images.credcdn.in/v2/_next/assets/images/faq/down-arrow.png"
              className={`m-[5px] transition-transform duration-500 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              alt="revert-icon"
            />
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? "max-h-[3000px]" : "max-h-0"
          }`}
        >
          <div className="text-white text-center px-[100px] py-[150px] flex flex-col">
            <div className="text-white text-left text-[31px] font-semibold leading-[36px] tracking-[0.1px] ">
              how can I add my cards on CRED?
            </div>
            <div className="text-white text-left text-[22px] font-medium leading-[40px] tracking-[-0.2px] opacity-60  mt-[60px]">
              {
                "CRED automatically detects credit cards linked to your account. if your cards are not detected, just tap the 'credit cards' icon, click 'add a card', fill in the details, and you're good to go."
              }
            </div>
            <div className="text-white text-left text-[31px] font-semibold leading-[36px] tracking-[0.1px]  mt-[60px]">
              can I manage all my credit cards on CRED?
            </div>
            <div className="text-white text-left text-[22px] font-medium leading-[40px] tracking-[-0.2px] opacity-60  mt-[60px]">
              yes. CRED supports cards from major Indian banks like HDFC, ICICI,
              SBI, Axis, Kotak, and AMEX. track spends, monitor EMIs, spot
              hidden charges, and keep an eye on reward points. all in one
              place. you also get timely bill payment reminders for your cards.
            </div>
            <div className="text-white text-left text-[31px] font-semibold leading-[36px] tracking-[0.1px]  mt-[60px]">
              what is CRED protect?
            </div>
            <div className="text-white text-left text-[22px] font-medium leading-[40px] tracking-[-0.2px] opacity-60  mt-[60px]">
              CRED protect helps you manage your credit cards by automatically
              detecting bills and statements. it also alerts you to hidden
              charges, tracks EMIs, sends smart bill reminders, and provides
              spending insights. this ensures you stay updated on your card
              activity with all essential information in one place.
            </div>
            <div className="text-white text-left text-[31px] font-semibold leading-[36px] tracking-[0.1px]  mt-[60px]">
              how do I pay my credit card bills?
            </div>
            <div className="text-white text-left text-[22px] font-medium leading-[40px] tracking-[-0.2px] opacity-60  mt-[60px]">
              to pay your credit card bills, select the card, and choose from
              available payment options like UPI, net banking, or debit cards.
              CRED uses the Bharat Bill Payment System (BBPS) platform for
              secure and instant bill payments for the supported banks.
            </div>
            <div className="text-white text-left text-[31px] font-semibold leading-[36px] tracking-[0.1px]  mt-[60px]">
              how does CRED keep my data secure?
            </div>
            <div className="text-white text-left text-[22px] font-medium leading-[40px] tracking-[-0.2px] opacity-60  mt-[60px]">
              CRED uses encryption and secure servers to protect user data.
              security measures include two-factor authentication and regular
              system audits to ensure data privacy and protection.
            </div>
            <div className="text-white text-left text-[31px] font-semibold leading-[36px] tracking-[0.1px]  mt-[60px]">
              what is know your perks?
            </div>
            <div className="text-white text-left text-[22px] font-medium leading-[40px] tracking-[-0.2px] opacity-60  mt-[60px]">
              {`know your perks gives you a detailed breakdown of your card's
            benefits—reward points, exclusive offers, and fee structures—along
            with all the terms and conditions you need to know.`}
            </div>
            <div className="text-white text-left text-[31px] font-semibold leading-[36px] tracking-[0.1px]  mt-[60px]">
              why cant I see perks for my card?
            </div>
            <div className="text-white text-left text-[22px] font-medium leading-[40px] tracking-[-0.2px] opacity-60  mt-[60px]">
              {`we're rolling this feature out in phases to ensure accuracy and
            reliability. if your card isn't supported yet, sit tight—we're
            working on bringing it to you soon.`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
