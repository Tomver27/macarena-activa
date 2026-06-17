"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "@/components/ui/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    num: "01",
    title: "Programación Visual Interactiva",
    body: "Experiencias en tiempo real con TouchDesigner: nodos de luz, color y movimiento que responden al entorno y a la presencia de los visitantes.",
    accent: "#BA5A5A",
  },
  {
    num: "02",
    title: "Arte y Cultura Comunitaria",
    body: "Talleres, exposiciones permanentes y temporales, ferias de emprendimiento local y eventos gastronómicos que fortalecen la identidad del barrio.",
    accent: "#A4CE8B",
  },
  {
    num: "03",
    title: "Encuentro y Aprendizaje",
    body: "Espacios flexibles que invitan a quedarse: aulas, patios, zonas de descanso para residentes, estudiantes, turistas y gestores culturales.",
    accent: "#86BCBD",
  },
];

export default function ExposicionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".expo-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="exposicion"
      ref={sectionRef}
      style={{
        background: "var(--crema)",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
        color: "var(--negro)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          className="expo-heading"
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--coral)",
            marginBottom: "1rem",
          }}
        >
          En el CDC
        </p>
        <AnimatedTitle
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "var(--text-lg)",
            lineHeight: 1.1,
            color: "var(--negro)",
            marginBottom: "4rem",
            maxWidth: "600px",
          }}
        >
          Lo que vivirás en el CDC
        </AnimatedTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.num}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              style={{
                background: "var(--negro)",
                color: "var(--crema)",
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: card.accent,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "3.5rem",
                  color: card.accent,
                  opacity: 0.2,
                  lineHeight: 1,
                  fontStyle: "italic",
                }}
              >
                {card.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.3rem",
                  lineHeight: 1.3,
                  color: "var(--crema)",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "rgba(250,248,244,0.6)",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
