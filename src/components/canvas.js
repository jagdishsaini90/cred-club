"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState, useCallback } from "react";

const Canvas = ({ limit, imageList = [] }) => {
  const [imgId, setImgId] = useState(0);
  const [prevImgId, setPrevImgId] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollContainerRef = useRef(null);
  const ticking = useRef(false); // For requestAnimationFrame scroll optimization

  const calculateImageIndex = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || !isVisible) return;

    const scrollTop = window.scrollY;
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;

    const relativeScroll = scrollTop - containerTop;
    const scrollableHeight = containerHeight - window.innerHeight;

    const scrollPercent = Math.min(
      Math.max(relativeScroll / scrollableHeight, 0),
      1
    );
    const nextId = Math.floor(scrollPercent * limit);

    if (nextId !== imgId) {
      setPrevImgId(imgId);
      setImgId(nextId);
    }
  }, [imgId, limit, isVisible]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        calculateImageIndex();
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [calculateImageIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }
    return () => {
      if (scrollContainerRef.current)
        observer.unobserve(scrollContainerRef.current);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (imageList.length === 0) return null;

  return (
    <div ref={scrollContainerRef} className="relative">
      <div className="relative w-full h-[600vh]">
        <div className="sticky top-0 left-0 h-screen">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start pointer-events-none overflow-hidden">
            {imageList[prevImgId] && (
              <Image
                src={imageList[prevImgId]}
                alt={`prev-image-${prevImgId}`}
                fill
                className="object-cover opacity-0 transition-opacity duration-500 z-10"
              />
            )}
            {imageList[imgId] && (
              <Image
                src={imageList[imgId]}
                alt={`canvas-image-${imgId}`}
                fill
                className="object-cover opacity-100 transition-opacity duration-500 z-20"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
