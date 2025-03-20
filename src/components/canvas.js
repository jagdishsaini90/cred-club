"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Canvas = ({ limit, imageList = [] }) => {
  const [imgId, setImgId] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container || !isVisible) return;

    const scrollTop = window.scrollY;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;

    const relativeScroll = scrollTop - containerTop;
    const scrollPercent = relativeScroll / containerHeight;
    const calculatedImgId = Math.floor(scrollPercent * limit);
    setImgId(Math.min(limit, Math.max(0, calculatedImgId)));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => {
      if (scrollContainerRef.current) {
        observer.unobserve(scrollContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  if (imageList.length === 0) return null;

  console.log(imgId);

  return (
    <div ref={scrollContainerRef} className="relative">
      <div className={`relative w-full h-[600vh]`}>
        <div className="sticky top-0 left-0 h-screen">
          <div className="absolute top-0 right-0 w-full h-full flex justify-center items-start pointer-events-none overflow-hidden">
            <Image
              src={imageList[imgId]}
              alt={`canvas-image-${imgId}`}
              fill
              className="object-cover transition-all duration-75"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
