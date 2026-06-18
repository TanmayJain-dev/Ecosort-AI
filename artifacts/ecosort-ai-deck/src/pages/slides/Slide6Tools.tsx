export default function Slide6Tools() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{
        backgroundColor: "#080C08",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 6vw",
        boxSizing: "border-box",
      }}
    >
      {/* Subtle accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(ellipse at 15% 70%, rgba(90,138,90,0.08) 0%, transparent 55%)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "5vh" }}>
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
            <span>⬡</span>
            <span>EcoSort AI</span>
          </div>
          <div
            style={{
              color: "#E0EBE0",
              opacity: 0.5,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              letterSpacing: "0.1vw",
            }}
          >
            AI TOOLS USED
          </div>
        </div>

        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "4vw",
            fontWeight: 400,
            color: "#E0EBE0",
            margin: "0 0 5vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.08vw",
          }}
        >
          Built With
        </h2>

        {/* Three tool cards */}
        <div style={{ display: "flex", flex: 1, gap: "3vw", alignItems: "stretch" }}>

          {/* Gemini API */}
          <div
            style={{
              flex: 1,
              borderTop: "2px solid #5A8A5A",
              paddingTop: "3.5vh",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
              }}
            >
              Tool 01
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "2.5vw",
                fontWeight: 700,
                color: "#E0EBE0",
                lineHeight: 1.1,
              }}
            >
              Gemini API
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1vw",
                color: "#5A8A5A",
                opacity: 0.8,
              }}
            >
              Core Generative AI Engine
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.35vw",
                color: "#E0EBE0",
                opacity: 0.65,
                lineHeight: 1.6,
              }}
            >
              Used as the core Generative AI engine for dynamic text classification and instruction generation — responds to any item with specific, realistic disposal advice.
            </div>
          </div>

          {/* Replit */}
          <div
            style={{
              flex: 1,
              borderTop: "2px solid rgba(90,138,90,0.5)",
              paddingTop: "3.5vh",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
              }}
            >
              Tool 02
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "2.5vw",
                fontWeight: 700,
                color: "#E0EBE0",
                lineHeight: 1.1,
              }}
            >
              Replit
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1vw",
                color: "#5A8A5A",
                opacity: 0.8,
              }}
            >
              Code &amp; Host
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.35vw",
                color: "#E0EBE0",
                opacity: 0.65,
                lineHeight: 1.6,
              }}
            >
              Used to code and host the frontend web application — users can type any item and receive instant Gemini-powered disposal guidance in a clean interface.
            </div>
          </div>

          {/* IBM BOB */}
          <div
            style={{
              flex: 1,
              borderTop: "2px solid rgba(90,138,90,0.35)",
              paddingTop: "3.5vh",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
              }}
            >
              Tool 03
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "2.5vw",
                fontWeight: 700,
                color: "#E0EBE0",
                lineHeight: 1.1,
              }}
            >
              IBM BOB
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1vw",
                color: "#5A8A5A",
                opacity: 0.8,
              }}
            >
              Build on BOB — Ideation
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.35vw",
                color: "#E0EBE0",
                opacity: 0.65,
                lineHeight: 1.6,
              }}
            >
              Used during the ideation phase to structure the project requirements and validate the responsible AI considerations.
            </div>

            {/* IBM BOB screenshot */}
            <div
              style={{
                flex: 1,
                border: "1px solid rgba(90,138,90,0.3)",
                overflow: "hidden",
                marginTop: "1vh",
                minHeight: "8vh",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}ibm-bob.png`}
                alt="IBM BOB screenshot"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontStyle: "italic", color: "#5A8A5A" }}>
            EcoSort AI
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.4 }}>
            06
          </div>
        </div>
      </div>
    </div>
  );
}
