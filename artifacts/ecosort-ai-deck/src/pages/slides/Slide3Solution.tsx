export default function Slide3Solution() {
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
      {/* Subtle radial accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100vw",
          height: "100vh",
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(90,138,90,0.09) 0%, transparent 55%)",
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
            AI SOLUTION &amp; TARGET USERS
          </div>
        </div>

        {/* Main content: left text, right three user cards */}
        <div style={{ display: "flex", flex: 1, gap: "6vw", alignItems: "center" }}>
          {/* Left */}
          <div style={{ flex: "0 0 40vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
            <h2
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "4.5vw",
                fontWeight: 400,
                color: "#E0EBE0",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.08vw",
                textWrap: "balance",
              }}
            >
              AI Solution Overview
            </h2>

            <div
              style={{
                width: "5vw",
                height: "2px",
                backgroundColor: "#5A8A5A",
                opacity: 0.6,
              }}
            />

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.5vw",
                color: "#E0EBE0",
                opacity: 0.75,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              EcoSort is a prompt-workflow prototype that acts as a smart waste segregation guide.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.5vw",
                color: "#E0EBE0",
                opacity: 0.6,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              A user describes any item — the AI returns the correct disposal category with clear safe-handling instructions, instantly.
            </p>
          </div>

          {/* Right: target user tiles */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
                marginBottom: "1vh",
              }}
            >
              Target Users
            </div>

            <div
              style={{
                padding: "2.5vh 2vw",
                borderTop: "1px solid rgba(90,138,90,0.35)",
                display: "flex",
                alignItems: "center",
                gap: "2vw",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "2.2vw",
                  color: "#5A8A5A",
                  minWidth: "3vw",
                }}
              >
                01
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.8vw", fontWeight: 700, color: "#E0EBE0", marginBottom: "0.5vh" }}>
                  Students
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.3vw", color: "#E0EBE0", opacity: 0.55 }}>
                  Building lifelong disposal habits from school onward
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "2.5vh 2vw",
                borderTop: "1px solid rgba(90,138,90,0.35)",
                display: "flex",
                alignItems: "center",
                gap: "2vw",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "2.2vw",
                  color: "#5A8A5A",
                  minWidth: "3vw",
                }}
              >
                02
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.8vw", fontWeight: 700, color: "#E0EBE0", marginBottom: "0.5vh" }}>
                  Households
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.3vw", color: "#E0EBE0", opacity: 0.55 }}>
                  Everyday users making quick, confident disposal decisions
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "2.5vh 2vw",
                borderTop: "1px solid rgba(90,138,90,0.35)",
                display: "flex",
                alignItems: "center",
                gap: "2vw",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "2.2vw",
                  color: "#5A8A5A",
                  minWidth: "3vw",
                }}
              >
                03
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.8vw", fontWeight: 700, color: "#E0EBE0", marginBottom: "0.5vh" }}>
                  Communities
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.3vw", color: "#E0EBE0", opacity: 0.55 }}>
                  Neighborhoods and organizations scaling waste literacy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontStyle: "italic", color: "#5A8A5A" }}>
            EcoSort AI
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.4 }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
