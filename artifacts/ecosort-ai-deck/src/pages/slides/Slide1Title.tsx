const base = import.meta.env.BASE_URL;

export default function Slide1Title() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#080C08", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background Image */}
      <img
        src={`${base}geodesic-bg.png`}
        crossOrigin="anonymous"
        alt="Geodesic greenhouse background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      {/* Gradient overlay — left visible, right dark */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background:
            "linear-gradient(to right, rgba(8,12,8,0.35) 0%, rgba(8,12,8,0.55) 45%, rgba(8,12,8,0.92) 60%, rgba(8,12,8,0.97) 100%)",
          zIndex: 1,
        }}
      />
      {/* Right content panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "46vw",
          height: "100vh",
          zIndex: 2,
          padding: "7vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Top metadata */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
            marginBottom: "6vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5vw",
              color: "#5A8A5A",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1vw",
              fontWeight: 700,
              letterSpacing: "0.15vw",
              textTransform: "uppercase",
            }}
          >
            <span style={{ fontSize: "1.1vw" }}>⬡</span>
            <span>EcoSort AI</span>
          </div>
          <div
            style={{
              color: "#E0EBE0",
              opacity: 0.55,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              letterSpacing: "0.1vw",
            }}
          >
            IBM SKILLSBUILD · AI INTERNSHIP
          </div>
        </div>

        {/* Title & subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "5.5vw",
              fontWeight: 400,
              color: "#E0EBE0",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.1vw",
              textWrap: "balance",
            }}
          >
            EcoSort AI
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "2.2vw",
              fontWeight: 500,
              color: "#5A8A5A",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: "0.02vw",
            }}
          >
            Smart Waste Guide
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.5vw",
              fontWeight: 400,
              color: "#E0EBE0",
              opacity: 0.65,
              margin: 0,
              lineHeight: 1.5,
              maxWidth: "34vw",
            }}
          >
            A prompt-workflow AI prototype for responsible waste segregation
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.2vh",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.1vw",
              fontStyle: "italic",
              color: "#5A8A5A",
            }}
          >Tanmay Jain</div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1vw",
              fontWeight: 500,
              color: "#E0EBE0",
              opacity: 0.45,
              letterSpacing: "0.05vw",
            }}
          >
            [My College]
          </div>
        </div>
      </div>
    </div>
  );
}
