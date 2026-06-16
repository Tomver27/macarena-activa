"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const links = [
  { label: "Exposición", href: "#exposicion" },
  { label: "Actividades", href: "#actividades" },
  { label: "El Lote", href: "#lote" },
  { label: "Avances", href: "#avances" },
  { label: "Equipo", href: "#equipo" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      delay: 2.2,
      ease: "power3.out",
    });

    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "1.2rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(186,90,90,0.15)" : "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "1.1rem",
          color: "var(--crema)",
          letterSpacing: "0.05em",
        }}
      >
        Macarena Activa
      </span>
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          alignItems: "center",
        }}
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              style={{
                color: "var(--crema)",
                textDecoration: "none",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.7,
                transition: "opacity 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.opacity = "1";
                (e.target as HTMLElement).style.color = "var(--coral)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.opacity = "0.7";
                (e.target as HTMLElement).style.color = "var(--crema)";
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
