"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const estrategias = [
  { label: "Permeabilidad espacial", color: "#BA5A5A" },
  { label: "Centralidad", color: "#F7E49B" },
  { label: "Integración ambiental", color: "#A4CE8B" },
  { label: "Composición volumétrica", color: "#86BCBD" },
];

export default function PlanosSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".plano-text > *", {
        x: -40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
      gsap.from(".plano-svg", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="planos"
      ref={sectionRef}
      style={{
        background: "var(--crema)",
        color: "var(--negro)",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div className="plano-text" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--coral)",
            }}
          >
            Arquitectura
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "var(--text-lg)",
              lineHeight: 1.1,
              fontStyle: "italic",
            }}
          >
            El espacio que estamos construyendo
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(17,17,17,0.65)", maxWidth: "420px" }}>
            Volumen en L como elemento jerárquico. Patio central como núcleo organizador.
            Cubiertas planas utilizables, ventilación cruzada y luz natural para reducir
            la dependencia de sistemas artificiales.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.5rem" }}>
            {estrategias.map((e) => (
              <span
                key={e.label}
                style={{
                  padding: "0.4rem 1rem",
                  border: `1px solid ${e.color}`,
                  fontSize: "0.78rem",
                  letterSpacing: "0.05em",
                  color: "var(--negro)",
                  borderRadius: "2px",
                }}
              >
                {e.label}
              </span>
            ))}
          </div>
        </div>

        {/* SVG floor plan placeholder */}
        <div
          className="plano-svg"
          style={{ position: "relative" }}
        >
          <svg
            viewBox="0 0 400 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto" }}
            aria-label="Esquema volumétrico del CDC"
          >
            {/* Grid background */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(17,17,17,0.06)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="400" height="350" fill="url(#grid)"/>

            {/* Main L-shape volume */}
            <path
              d="M 60 60 L 280 60 L 280 160 L 180 160 L 180 280 L 60 280 Z"
              fill="rgba(186,90,90,0.12)"
              stroke="#BA5A5A"
              strokeWidth="1.5"
            />

            {/* Central patio */}
            <rect
              x="100"
              y="100"
              width="100"
              height="100"
              fill="rgba(164,206,139,0.15)"
              stroke="#A4CE8B"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <text x="150" y="155" textAnchor="middle" fill="#A4CE8B" fontSize="9" fontFamily="var(--font-inter)">
              Patio central
            </text>

            {/* Secondary volume */}
            <rect
              x="290"
              y="60"
              width="80"
              height="180"
              fill="rgba(134,188,189,0.1)"
              stroke="#86BCBD"
              strokeWidth="1.5"
            />

            {/* Access arrows */}
            <path d="M 20 170 L 55 170" stroke="#F7E49B" strokeWidth="1.5" markerEnd="url(#arr)" strokeLinecap="round"/>
            <path d="M 170 310 L 170 285" stroke="#F7E49B" strokeWidth="1.5" markerEnd="url(#arr)" strokeLinecap="round"/>

            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M 0 0 L 6 3 L 0 6 Z" fill="#F7E49B"/>
              </marker>
            </defs>

            {/* Labels */}
            <text x="160" y="50" textAnchor="middle" fill="#BA5A5A" fontSize="9" fontFamily="var(--font-inter)" letterSpacing="2">
              VOLUMEN L
            </text>
            <text x="330" y="155" textAnchor="middle" fill="#86BCBD" fontSize="8" fontFamily="var(--font-inter)" letterSpacing="1">
              SERVICIOS
            </text>
            <text x="14" y="165" fill="#F7E49B" fontSize="8" fontFamily="var(--font-inter)">
              Acceso
            </text>

            {/* Scale bar */}
            <path d="M 60 300 L 160 300" stroke="rgba(17,17,17,0.3)" strokeWidth="1"/>
            <path d="M 60 296 L 60 304 M 160 296 L 160 304" stroke="rgba(17,17,17,0.3)" strokeWidth="1"/>
            <text x="110" y="314" textAnchor="middle" fill="rgba(17,17,17,0.4)" fontSize="8" fontFamily="var(--font-inter)">
              ~20 m
            </text>
          </svg>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.72rem",
              color: "rgba(17,17,17,0.35)",
              marginTop: "0.75rem",
              letterSpacing: "0.1em",
            }}
          >
            Esquema volumétrico conceptual · Planos definitivos en desarrollo
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #planos > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
