"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const fill = fillRef.current;
    const counter = counterRef.current;
    if (!root || !fill || !counter) return;

    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    const timeout = setTimeout(() => {
      if (tl.progress() < 1) tl.progress(1);
    }, 4000);

    tl.to(obj, {
      val: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(obj.val);
        if (counter) counter.textContent = String(v).padStart(3, "0");
        if (fill) fill.style.width = `${v}%`;
      },
    }).to(root, {
      yPercent: -100,
      duration: 0.9,
      ease: "power4.inOut",
      delay: 0.2,
    });

    return () => {
      clearTimeout(timeout);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={rootRef} className="preloader">
      <h1 className="preloader__title">Macarena En Movimiento</h1>
      <div className="preloader__bar">
        <div ref={fillRef} className="preloader__fill" />
      </div>
      <span ref={counterRef} className="preloader__counter">
        000
      </span>
    </div>
  );
}
