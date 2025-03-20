"use client";

import { useEffect, useState, useRef } from "react";

const URL_1 = `https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/perks/seq_v2/perks-`;
const URL_2 = `https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/smart-statements/ss_seq/ss-`;
const URL_3 = `https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/unbilled/seq_v3/unbilled-`;

const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
  });

export default function useLoadImages(
  limit1 = 338,
  limit2 = 194,
  limit3 = 149
) {
  const [handsImage, setHandsImage] = useState([]);
  const [ssImage, setSSImage] = useState([]);
  const [untitledImage, setUntitledImage] = useState([]);

  const loadedRef = useRef({ hands: false, ss: false, untitled: false });

  useEffect(() => {
    const loadImages = async () => {
      if (!loadedRef.current.hands) {
        const hands = await Promise.all(
          Array.from({ length: limit1 }, (_, i) =>
            preloadImage(`${URL_1}${i}.jpg?tr=orig`)
          )
        );
        setHandsImage(hands.filter(Boolean));
        loadedRef.current.hands = true;
      }

      if (!loadedRef.current.ss) {
        const ss = await Promise.all(
          Array.from({ length: limit2 }, (_, i) =>
            preloadImage(`${URL_2}${i}.jpg?tr=orig`)
          )
        );
        setSSImage(ss.filter(Boolean));
        loadedRef.current.ss = true;
      }

      if (!loadedRef.current.untitled) {
        const untitled = await Promise.all(
          Array.from({ length: limit3 }, (_, i) =>
            preloadImage(`${URL_3}${i}.jpg?tr=orig`)
          )
        );
        setUntitledImage(untitled.filter(Boolean));
        loadedRef.current.untitled = true;
      }
    };

    loadImages();
  }, [limit1, limit2, limit3]);

  return { handsImage, ssImage, untitledImage };
}
