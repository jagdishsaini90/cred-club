"use client";

import { useState, useEffect } from "react";

const URL_1 = `https://web-images.credcdn.in/v2/_next/assets/images/cards/desktop/perks/seq_v2/perks-`;
const URL_2 = `https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/smart-statements/ss_seq/ss-`;
const URL_3 = `https://web-images.credcdn.in/v2/_next/assets/images/cards/tablet/unbilled/seq_v3/unbilled-`;

export default function useLoadImages(
  limit1 = 338,
  limit2 = 195,
  limit3 = 149
) {
  const [handsImage, setHandsImage] = useState([]);
  const [ssImage, setSSImage] = useState([]);
  const [untitledImage, setUntitledImage] = useState([]);

  useEffect(() => {
    const loadImages = () => {
      if (handsImage.length === 0) {
        const loadedHandsImages = [];
        for (let i = 0; i < limit1; i++) {
          const img = new Image();
          img.src = `${URL_1}${i}.jpg?tr=orig`;
          loadedHandsImages[i] = img.src;
        }
        setHandsImage(loadedHandsImages);
      }

      if (ssImage.length === 0) {
        const loadedSSImages = [];
        for (let i = 0; i < limit2; i++) {
          const img = new Image();
          img.src = `${URL_2}${i}.jpg?tr=orig`;
          loadedSSImages[i] = img.src;
        }
        setSSImage(loadedSSImages);
      }

      if (untitledImage.length === 0) {
        const loadedUntitledImages = [];
        for (let i = 0; i < limit3; i++) {
          const img = new Image();
          img.src = `${URL_3}${i}.jpg?tr=orig`;
          loadedUntitledImages[i] = img.src;
        }
        setUntitledImage(loadedUntitledImages);
      }
    };

    loadImages();
  }, [handsImage, ssImage, untitledImage, limit1, limit2, limit3]);

  return { handsImage, ssImage, untitledImage };
}
