"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 107044, suffix: "", label: "Habitantes en Santa Fe", color: "#F7E49B", decimals: 0 },
  { value: 13.4, suffix: "M", label: "Visitantes anuales en Bogotá", color: "#BA5A5A", decimals: 1 },
  { value: 72, suffix: "%", label: "Flujos de tránsito puro en el eje", color: "#86BCBD", decimals: 0 },
  { value: 74.5, suffix: "%", label: "Viajes en modos sostenibles", color: "#A4CE8B", decimals: 1 },
  { value: 15014, suffix: "", label: "Empresas activas en el sector", color: "#F7E49B", decimals: 0 },
  { value: 1033, suffix: " m²", label: "Del predio estratégico", color: "#BA5A5A", decimals: 0 },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      const items = sectionRef.current?.querySelectorAll(".stat-item");
      items?.forEach((item) => {
        const numEl = item.querySelector(".stat-num") as HTMLElement;
        const target = parseFloat(numEl.dataset.target ?? "0");
        const suffix = numEl.dataset.suffix ?? "";
        const decimals = parseInt(numEl.dataset.decimals ?? "0");

        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 80%", once: true },
        });

        gsap.fromTo(
          { val: 0 },
          { val: target },
          {
            val: target,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: function () {
              const v = this.targets()[0].val;
              numEl.textContent =
                (decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("es-CO")) + suffix;
            },
            scrollTrigger: { trigger: item, start: "top 80%", once: true },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--oscuro)",
        color: "var(--crema)",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        borderTop: "1px solid rgba(250,248,244,0.05)",
        borderBottom: "1px solid rgba(250,248,244,0.05)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          ref={headingRef}
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(250,248,244,0.35)",
            marginBottom: "4rem",
          }}
        >
          El territorio en números
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0px",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-item"
              style={{
                padding: "2.5rem 2rem",
                borderLeft: "1px solid rgba(250,248,244,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              <span
                className="stat-num"
                data-target={s.value}
                data-suffix={s.suffix}
                data-decimals={s.decimals}
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                  color: s.color,
                  lineHeight: 1,
                  fontStyle: "italic",
                }}
              >
                0
              </span>
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(250,248,244,0.45)",
                  lineHeight: 1.4,
                  maxWidth: "180px",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
