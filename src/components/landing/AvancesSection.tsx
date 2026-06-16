"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const fases = [
  {
    num: "01",
    titulo: "Consolidación del Equipo",
    estado: "completado",
    items: [
      "Elección de líder y formación del grupo Orizzonti",
      "Salida de campo al barrio La Macarena",
      "Elección y análisis del predio (Calle 26 Bis #4-88)",
      "Definición del problema y título del proyecto",
    ],
  },
  {
    num: "02",
    titulo: "Componentes del Proyecto",
    estado: "completado",
    items: [
      "Lectura del territorio y análisis contextual",
      "Reconocimiento urbano: 72% flujos de tránsito puro",
      "Estudio de referentes: CDC El Porvenir, Ex Fornace (Milán), La Santissima (Nápoles)",
      "Propuesta arquitectónica: volumen en L, patio central, SIGSA",
      "Análisis de movilidad y paisaje cultural",
    ],
  },
  {
    num: "03",
    titulo: "Implementación",
    estado: "en-curso",
    items: [
      "Landing page en Next.js (en curso)",
      "Programación visual interactiva en TouchDesigner (en curso)",
      "Sistema SIGSA: gestión sostenible del agua (diseño)",
      "Análisis de viabilidad económica y fuentes de financiamiento",
      "Streaming RTC desde TouchDesigner al CDC (futuro)",
    ],
  },
];

const equipo = [
  "Carla Bernal",
  "Isabella Roa",
  "Paula Sánchez",
  "Erika Naranjo",
  "Julieth Tamara",
  "Tomás Vera",
];

export default function AvancesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fase-item", {
        x: -40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.9,
        ease: "power3.out",
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
      id="avances"
      ref={sectionRef}
      style={{
        background: "var(--crema)",
        color: "var(--negro)",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--coral)",
            marginBottom: "1rem",
          }}
        >
          Progreso
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "var(--text-lg)",
            lineHeight: 1.1,
            fontStyle: "italic",
            marginBottom: "5rem",
          }}
        >
          Nuestro progreso
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "calc(2.5rem - 1px)",
              top: "2.5rem",
              bottom: "2.5rem",
              width: "1px",
              background: "rgba(17,17,17,0.12)",
            }}
          />

          {fases.map((fase) => (
            <div
              key={fase.num}
              className="fase-item"
              style={{
                display: "grid",
                gridTemplateColumns: "5rem 1fr",
                gap: "2rem",
                padding: "2.5rem 0",
                borderBottom: "1px solid rgba(17,17,17,0.08)",
              }}
            >
              {/* Circle marker */}
              <div style={{ display: "flex", justifyContent: "center", paddingTop: "0.2rem" }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background:
                      fase.estado === "completado"
                        ? "var(--verde)"
                        : "var(--amarillo)",
                    border: "3px solid var(--crema)",
                    boxShadow:
                      fase.estado === "completado"
                        ? "0 0 0 1px var(--verde)"
                        : "0 0 0 1px var(--amarillo)",
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "0.75rem",
                      color: "rgba(17,17,17,0.35)",
                      fontStyle: "italic",
                    }}
                  >
                    Fase {fase.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "2px",
                      background:
                        fase.estado === "completado"
                          ? "rgba(164,206,139,0.2)"
                          : "rgba(247,228,155,0.2)",
                      color: fase.estado === "completado" ? "var(--verde)" : "#8a7a00",
                    }}
                  >
                    {fase.estado === "completado" ? "Completado" : "En curso"}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.3rem",
                    color: "var(--negro)",
                    lineHeight: 1.2,
                  }}
                >
                  {fase.titulo}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none" }}>
                  {fase.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontSize: "0.88rem",
                        lineHeight: 1.5,
                        color: "rgba(17,17,17,0.6)",
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: fase.estado === "completado" ? "var(--verde)" : "var(--coral)",
                          marginTop: "0.2rem",
                          flexShrink: 0,
                        }}
                      >
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Equipo chips */}
        <div style={{ marginTop: "4rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.35)",
              marginBottom: "1rem",
            }}
          >
            Grupo Orizzonti
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {equipo.map((nombre) => (
              <span
                key={nombre}
                style={{
                  padding: "0.4rem 1rem",
                  border: "1px solid rgba(17,17,17,0.15)",
                  fontSize: "0.82rem",
                  color: "var(--negro)",
                  borderRadius: "2px",
                }}
              >
                {nombre}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
