"use client";
import { Suspense, lazy } from "react";
import Loader from "@/components/loader";
import useLoadImages from "@/hooks/useloadImages";

const Navbar = lazy(() => import("@/components/navbar"));
const Hero = lazy(() => import("@/components/hero"));
const Video = lazy(() => import("@/components/video"));
const Canvas = lazy(() => import("@/components/canvas"));
const Phonestack = lazy(() => import("@/components/phonestack"));
const FAQ = lazy(() => import("@/components/faq"));
const Footer = lazy(() => import("@/components/footer"));

export default function Home() {
  const { handsImage, ssImage, untitledImage } = useLoadImages();

  if (
    handsImage.length !== 338 ||
    ssImage.length !== 194 ||
    untitledImage.length !== 149
  ) {
    return <Loader />;
  }

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Hero />

        <section className="bg-white overflow-x-hidden w-screen h-screen justify-center flex p-[125px]">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-[17px] tracking-[4px] leading-8 uppercase text-[#6c6c6c] whitespace-pre-wrap">
              credit card management. reimagined.
            </p>
            <div className="mb-[10px]" />
            <h1 className="w-[60%] py-1 whitespace-pre-wrap bg-gradient-to-b from-black to-[#555555] bg-clip-text text-transparent font-extrabold text-[88px] leading-[87px] tracking-[-0.6px]">
              everything you need. nothing you {"don't."}
            </h1>
            <div className="mb-[20px]" />
            <p className="w-[60%] text-[#6c6c6c] whitespace-pre-wrap text-[20px] font-normal tracking-[0.6px] leading-[36px] opacity-60">
              welcome to a credit card experience designed to feel like second
              nature. like muscle memory. life’s logistics demand enough of your
              time, effort, and attention—managing your credit cards{" "}
              {"shouldn't"}
              add to the list.
            </p>
            <div className="mb-[20px]" />
            <p className="text-[#6c6c6c] whitespace-pre-wrap text-[20px] font-normal tracking-[0.6px] leading-[36px] opacity-60">
              you can put your admin duties to rest. for good.
            </p>
          </div>
        </section>

        <Video
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/multi-card/mc-fold-desktop-poster.jpg?tr=orig"
          src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/multi-card/multi-card-desktop-video.mp4?tr=q-95"
        />

        <Canvas limit={149} imageList={untitledImage} />

        <Video
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/single-card/single-card-fold-desktop-poster.jpg?tr=orig"
          src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/single-card/single-card.mp4?tr=q-95"
        />

        <Phonestack />

        <Canvas limit={194} imageList={ssImage} />

        <Canvas limit={338} imageList={handsImage} />

        <Video
          poster="https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/cta/cta-fold-desktop-poster.jpg?tr=orig"
          src="https://web-images.credcdn.in/v2/_next/assets/videos/cards/desktop/cta/cta-fold-desktop.mp4?tr=orig"
        />

        <FAQ />
        <Footer />
      </Suspense>
    </div>
  );
}
