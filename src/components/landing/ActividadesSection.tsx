"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const actividades = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#BA5A5A" strokeWidth="1.5" />
        <path d="M10 16 C10 12 22 12 22 16 C22 20 10 20 10 16Z" stroke="#BA5A5A" strokeWidth="1.2" fill="none"/>
        <circle cx="16" cy="16" r="2" fill="#BA5A5A"/>
      </svg>
    ),
    label: "Actividades comunitarias",
    color: "#BA5A5A",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="10" width="20" height="14" rx="1" stroke="#F7E49B" strokeWidth="1.5"/>
        <path d="M11 10 L11 8 M21 10 L21 8" stroke="#F7E49B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 16 L22 16 M10 20 L18 20" stroke="#F7E49B" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    label: "Formación y aprendizaje",
    color: "#F7E49B",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6 L26 12 L26 24 L6 24 L6 12 Z" stroke="#A4CE8B" strokeWidth="1.5" fill="none"/>
        <path d="M13 24 L13 18 L19 18 L19 24" stroke="#A4CE8B" strokeWidth="1.2" fill="none"/>
        <circle cx="16" cy="13" r="2" stroke="#A4CE8B" strokeWidth="1.2"/>
      </svg>
    ),
    label: "Servicios y apoyo comunitario",
    color: "#A4CE8B",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 22 Q11 12 16 16 Q21 20 26 10" stroke="#86BCBD" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="2" fill="#86BCBD"/>
        <path d="M8 26 L24 26" stroke="#86BCBD" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    label: "Contemplación del paisaje",
    color: "#86BCBD",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 8 L24 8 L24 20 L16 26 L8 20 Z" stroke="#BA5A5A" strokeWidth="1.5" fill="none"/>
        <path d="M12 14 L20 14 M12 17 L17 17" stroke="#BA5A5A" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    label: "Ferias y exposiciones",
    color: "#BA5A5A",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="11" cy="14" r="4" stroke="#A4CE8B" strokeWidth="1.5"/>
        <circle cx="21" cy="14" r="4" stroke="#A4CE8B" strokeWidth="1.5"/>
        <path d="M7 26 Q11 20 16 22 Q21 24 25 26" stroke="#A4CE8B" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    label: "Encuentro cultural",
    color: "#A4CE8B",
  },
];

export default function ActividadesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".act-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="actividades"
      ref={sectionRef}
      style={{
        background: "var(--oscuro)",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        color: "var(--crema)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--verde)",
            marginBottom: "1rem",
          }}
        >
          Programación
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "var(--text-lg)",
            lineHeight: 1.1,
            marginBottom: "5rem",
            maxWidth: "500px",
            fontStyle: "italic",
          }}
        >
          Actividades del CDC
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1px",
            border: "1px solid rgba(250,248,244,0.08)",
          }}
        >
          {actividades.map((act) => (
            <div
              key={act.label}
              className="act-item"
              style={{
                padding: "2.5rem 2rem",
                borderRight: "1px solid rgba(250,248,244,0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(250,248,244,0.03)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {act.icon}
              <span
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.4,
                  color: "rgba(250,248,244,0.85)",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                {act.label}
              </span>
              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: act.color,
                  opacity: 0.6,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
