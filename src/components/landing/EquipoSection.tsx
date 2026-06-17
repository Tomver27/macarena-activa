"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "@/components/ui/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const miembros = [
  {
    nombre: "Carla Bernal",
    carrera: "Ingeniería Civil",
    aporte: "Sistema SIGSA · Cubiertas verdes",
    color: "#86BCBD",
  },
  {
    nombre: "Isabella Roa",
    carrera: "Arquitectura",
    aporte: "Diseño espacial · Planos",
    color: "#A4CE8B",
  },
  {
    nombre: "Paula Sánchez",
    carrera: "Arquitectura",
    aporte: "Composición volumétrica",
    color: "#A4CE8B",
  },
  {
    nombre: "Erika Naranjo",
    carrera: "Arquitectura",
    aporte: "Implantación urbana",
    color: "#A4CE8B",
  },
  {
    nombre: "Julieth Tamara",
    carrera: "Negocios Internacionales",
    aporte: "Viabilidad económica · Alianzas",
    color: "#F7E49B",
  },
  {
    nombre: "Tomás Vera",
    carrera: "Ingeniería de Sistemas",
    aporte: "Landing page · TouchDesigner",
    color: "#BA5A5A",
  },
];

export default function EquipoSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".miembro-card", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
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
      id="equipo"
      ref={sectionRef}
      style={{
        background: "var(--oscuro)",
        color: "var(--crema)",
        padding: "8rem clamp(1.5rem, 6vw, 6rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--azul)",
            marginBottom: "1rem",
          }}
        >
          Grupo Orizzonti
        </p>
        <AnimatedTitle
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "var(--text-lg)",
            lineHeight: 1.1,
            fontStyle: "italic",
            marginBottom: "1rem",
          }}
        >
          El equipo
        </AnimatedTitle>
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(250,248,244,0.45)",
            marginBottom: "4rem",
            maxWidth: "500px",
            lineHeight: 1.6,
          }}
        >
          Expansión de horizontes a través del encuentro entre disciplinas, culturas y conocimientos.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "rgba(250,248,244,0.06)",
          }}
        >
          {miembros.map((m) => (
            <div
              key={m.nombre}
              className="miembro-card"
              style={{
                background: "var(--oscuro)",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(250,248,244,0.025)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--oscuro)";
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: `${m.color}22`,
                  border: `1px solid ${m.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: m.color,
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.15rem",
                  color: "var(--crema)",
                }}
              >
                {m.nombre}
              </h3>
              <p style={{ fontSize: "0.78rem", color: m.color, letterSpacing: "0.05em" }}>
                {m.carrera}
              </p>
              <p style={{ fontSize: "0.82rem", color: "rgba(250,248,244,0.4)", lineHeight: 1.4 }}>
                {m.aporte}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "3rem",
            fontSize: "0.78rem",
            color: "rgba(250,248,244,0.25)",
            letterSpacing: "0.1em",
            textAlign: "center",
          }}
        >
          Universidad Piloto de Colombia · Taller Internacional Italia en Perspectiva 2026
        </p>
      </div>
    </section>
  );
}
