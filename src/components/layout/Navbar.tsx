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
  const fullRef = useRef<HTMLSpanElement>(null);
  const memCharsRef = useRef<(HTMLSpanElement | null)[]>([null, null, null]);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayLinksRef = useRef<(HTMLLIElement | null)[]>([]);
  const lineTopRef = useRef<HTMLDivElement>(null);
  const lineMidRef = useRef<HTMLDivElement>(null);
  const lineBotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(navRef.current, { y: -80, opacity: 0, duration: 1, delay: 2.2, ease: "power3.out" });
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const full = fullRef.current;
    const chars = memCharsRef.current.filter((c): c is HTMLSpanElement => c !== null);
    if (!full || chars.length < 3) return;

    if (scrolled) {
      gsap.to(full, { opacity: 0, y: -12, duration: 0.3, ease: "power2.in" });
      gsap.fromTo(chars,
        { opacity: 0, y: 22, scale: 0.3, letterSpacing: "0em" },
        { opacity: 1, y: 0, scale: 1, letterSpacing: "0.32em", duration: 0.65, stagger: 0.13, ease: "back.out(2.5)", delay: 0.28 }
      );
    } else {
      gsap.to(chars, { opacity: 0, y: -12, scale: 0.3, letterSpacing: "0em", duration: 0.22, stagger: 0.05, ease: "power2.in" });
      gsap.to(full, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out", delay: 0.22 });
    }
  }, [scrolled]);

  // Animate overlay items in once it mounts
  useEffect(() => {
    if (!menuOpen || !overlayRef.current) return;
    const validLinks = overlayLinksRef.current.filter((el): el is HTMLLIElement => el !== null);
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
    gsap.from(validLinks, { y: 55, opacity: 0, stagger: 0.09, duration: 0.55, ease: "power3.out", delay: 0.15 });
  }, [menuOpen]);

  const openMenu = () => {
    gsap.to(lineTopRef.current, { y: 7, rotate: 45, duration: 0.3, ease: "power2.inOut" });
    gsap.to(lineMidRef.current, { opacity: 0, duration: 0.15 });
    gsap.to(lineBotRef.current, { y: -7, rotate: -45, duration: 0.3, ease: "power2.inOut" });
    setMenuOpen(true);
  };

  const closeMenu = () => {
    gsap.to(lineTopRef.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });
    gsap.to(lineMidRef.current, { opacity: 1, duration: 0.2, delay: 0.1 });
    gsap.to(lineBotRef.current, { y: 0, rotate: 0, duration: 0.3, ease: "power2.inOut" });

    const validLinks = overlayLinksRef.current.filter((el): el is HTMLLIElement => el !== null);
    gsap.to(validLinks, { y: -30, opacity: 0, stagger: 0.05, duration: 0.25, ease: "power2.in" });
    gsap.to(overlayRef.current, {
      opacity: 0, duration: 0.35, delay: 0.2, ease: "power2.in",
      onComplete: () => setMenuOpen(false),
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-hamburger      { display: none; }
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger      { display: flex !important; }
        }
      `}</style>

      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          padding: "1.2rem 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "background 0.4s, backdrop-filter 0.4s",
          background: scrolled || menuOpen ? "rgba(10,10,10,0.88)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          borderBottom: scrolled && !menuOpen ? "1px solid rgba(186,90,90,0.15)" : "none",
        }}
      >
        {/* Logo */}
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <span style={{ visibility: "hidden", pointerEvents: "none", fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
            Macarena En Movimiento
          </span>
          <span ref={fullRef} style={{ position: "absolute", left: 0, fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", color: "var(--crema)", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
            Macarena En Movimiento
          </span>
          <div style={{ position: "absolute", left: 0, display: "flex", alignItems: "center" }}>
            {["M", "E", "M"].map((char, i) => (
              <span
                key={i}
                ref={(el) => { memCharsRef.current[i] = el; }}
                style={{ display: "inline-block", fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", color: "var(--coral)", opacity: 0 }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop links */}
        <ul className="nav-desktop-links" style={{ gap: "2rem", listStyle: "none", alignItems: "center" }}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                style={{ color: "var(--crema)", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, transition: "opacity 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.color = "var(--coral)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "0.7"; (e.target as HTMLElement).style.color = "var(--crema)"; }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (mobile only) */}
        <button
          className="nav-hamburger"
          onClick={menuOpen ? closeMenu : openMenu}
          style={{
            flexDirection: "column", justifyContent: "center", alignItems: "flex-end", gap: "5px",
            background: "none", border: "none", padding: "6px", cursor: "pointer", zIndex: 1002,
          }}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <div ref={lineTopRef} style={{ width: "24px", height: "2px", background: "var(--crema)", borderRadius: "2px", transformOrigin: "center" }} />
          <div ref={lineMidRef} style={{ width: "24px", height: "2px", background: "var(--crema)", borderRadius: "2px" }} />
          <div ref={lineBotRef} style={{ width: "16px", height: "2px", background: "var(--crema)", borderRadius: "2px", transformOrigin: "center" }} />
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div
          ref={overlayRef}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: "rgba(8,8,8,0.97)",
            backdropFilter: "blur(24px)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.1rem" }}>
            {links.map((l, i) => (
              <li key={l.href} ref={(el) => { overlayLinksRef.current[i] = el; }}>
                <a
                  href={l.href}
                  onClick={(e) => { handleClick(e, l.href); closeMenu(); }}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "clamp(2.2rem, 11vw, 3.8rem)",
                    fontStyle: "italic",
                    color: "var(--crema)",
                    textDecoration: "none",
                    padding: "0.45rem 2.5rem",
                    letterSpacing: "0.02em",
                    transition: "color 0.2s",
                  }}
                  onTouchStart={(e) => { e.currentTarget.style.color = "var(--coral)"; }}
                  onTouchEnd={(e) => { setTimeout(() => { e.currentTarget.style.color = "var(--crema)"; }, 220); }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <p style={{ position: "absolute", bottom: "2rem", fontSize: "0.65rem", letterSpacing: "0.22em", color: "rgba(250,248,244,0.18)", textTransform: "uppercase" }}>
            Macarena En Movimiento · CDC
          </p>

          {/* Decorative coral line */}
          <div style={{ position: "absolute", bottom: "5.5rem", left: "50%", transform: "translateX(-50%)", width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--coral), transparent)", opacity: 0.5 }} />
        </div>
      )}
    </>
  );
}
