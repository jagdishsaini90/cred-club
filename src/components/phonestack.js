"use client";
import Image from "next/image";
import React from "react";

const Phonestack = () => {
  return (
    <div className="relative w-screen min-h-screen bg-white p-[125px] flex flex-col items-start justify-center text-center">
      <div className="absolute top-[-70vh] h-[3px] bg-red-500 z-20" />

      <h1 className="font-[denton] text-black text-[67px] font-extrabold tracking-[-0.3px] leading-[65px] text-left">
        every touch is <br /> pure power.
      </h1>

      <div className="mb-10" />

      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="flex-1">
          <video
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/swipe-fallback.jpg?tr=orig"
            className="select-none object-cover w-full"
          >
            <source
              src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/swipe.mp4?tr=q-95"
              type="video/mp4"
            />
          </video>

          <div className="mb-4" />
          <div className="flex items-start">
            <Image
              width={32}
              height={32}
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/swipe-left.png?tr=orig"
              alt="swipe left icon"
            />
            <div className="ml-3 text-left">
              <p className="text-[15px] tracking-[1.58px] leading-[27px] text-black">
                SWIPE LEFT{" "}
                <span className="block text-[15px] tracking-[0.37px] leading-[27px] opacity-60">
                  on any card to manage payment history, card offers, and more.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <video
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/long-press-fallback.jpg?tr=orig"
            className="select-none object-cover w-full"
          >
            <source
              src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/long-press.mp4?tr=q-95"
              type="video/mp4"
            />
          </video>

          <div className="mb-4" />
          <div className="flex items-start">
            <Image
              width={32}
              height={32}
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/tap-hold.png?tr=orig"
              alt="tap and hold icon"
            />
            <div className="ml-3 text-left">
              <p className="text-[15px] tracking-[1.58px] leading-[27px] text-black">
                PRESS AND HOLD{" "}
                <span className="block text-[15px] tracking-[0.37px] leading-[27px] opacity-60">
                  a card to view balances, usage limits, recent activity and
                  other key details.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <video
            playsInline
            autoPlay
            muted
            loop
            preload="metadata"
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/interactions/smart-nav-fallback.jpg?tr=orig"
            className="select-none object-cover w-full"
          >
            <source
              src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/interactions/smart-nav.mp4?tr=q-95"
              type="video/mp4"
            />
          </video>

          <div className="mb-4" />
          <div className="flex items-start">
            <Image
              width={32}
              height={32}
              src="https://web-images.credcdn.in/v2/_next/assets/images/cards/smart-nav.png?tr=orig"
              alt="smart nav icon"
            />
            <div className="ml-3 text-left">
              <p className="text-[15px] tracking-[1.58px] leading-[27px] text-black">
                SMART NAVIGATION{" "}
                <span className="block text-[15px] tracking-[0.37px] leading-[27px] opacity-60">
                  makes switching between cards seamless.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phonestack;
