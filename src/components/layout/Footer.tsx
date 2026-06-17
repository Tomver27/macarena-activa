export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--oscuro)",
        borderTop: "1px solid rgba(186,90,90,0.2)",
        padding: "4rem 2.5rem 3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          color: "var(--crema)",
        }}
      >
        Macarena En Movimiento
      </span>
      <p style={{ color: "var(--azul)", fontSize: "0.9rem", letterSpacing: "0.1em" }}>
        Barrio La Macarena · Bogotá, Colombia
      </p>
      <p style={{ color: "rgba(250,248,244,0.4)", fontSize: "0.8rem" }}>
        Grupo Orizzonti · Universidad Piloto de Colombia · Taller Internacional Italia 2026
      </p>
      <div
        style={{
          width: "40px",
          height: "1px",
          background: "var(--coral)",
          margin: "0.5rem auto 0",
        }}
      />
    </footer>
  );
}
