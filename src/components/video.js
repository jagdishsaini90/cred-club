"use client";
import React, { useEffect, useRef } from "react";

const Video = ({ poster, src }) => {
  const sectionRef = useRef(null);
  const hasScrolled = useRef(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting && !hasScrolled.current) {
        hasScrolled.current = true;
        document.body.style.overflow = "hidden";

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const handleVideoEnd = () => {
      document.body.style.overflow = "";
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });

    if (section) observer.observe(section);
    if (video) video.addEventListener("ended", handleVideoEnd);

    return () => {
      observer.disconnect();
      if (video) video.removeEventListener("ended", handleVideoEnd);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="relative w-screen h-screen" ref={sectionRef}>
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        loop={false}
        preload="metadata"
        poster={poster}
        src={src}
        className="block w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};

export default Video;
