"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio: { isInitialized: boolean; init: () => void };
  }
}

export default function UnicornBackground() {
  useEffect(() => {
    if (window.UnicornStudio?.init) {
      window.UnicornStudio.init();
    } else {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.8/dist/unicornStudio.umd.js";
      script.onload = () => window.UnicornStudio.init();
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <div
      data-us-project="zATCoSD107GyTIX6hrYA"
      className="absolute inset-0 w-full h-full"
    />
  );
}
