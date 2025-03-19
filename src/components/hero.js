import React from "react";

const Hero = () => {
  return (
    <div className="overflow-x-hidden w-screen">
      <section className="min-h-screen bg-black flex flex-wrap justify-center content-start relative z-20">
        <div className="h-full w-full absolute top-0 left-0 pointer-events-none z-0">
          <video
            playsInline
            autoPlay
            muted
            loop={false}
            preload="metadata"
            poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/hero-fold/hero-fold-desktop-poster.jpg?tr=orig"
            src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/hero-fold/hero-fold-desktop-video.mp4?tr=q-95"
            className="block w-full h-full object-cover pointer-events-none"
            style={{ position: "initial", visibility: "visible" }}
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Hero;
