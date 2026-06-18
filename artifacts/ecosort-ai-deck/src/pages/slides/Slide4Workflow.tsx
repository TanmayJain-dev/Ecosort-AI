export default function Slide4Workflow() {
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
      {/* Background radial */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(ellipse at 50% 80%, rgba(90,138,90,0.07) 0%, transparent 60%)",
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
            THE AI WORKFLOW
          </div>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "4vw",
            fontWeight: 400,
            color: "#E0EBE0",
            margin: "0 0 1.5vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.08vw",
          }}
        >
          How It Works
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.5vw",
            color: "#E0EBE0",
            opacity: 0.6,
            margin: "0 0 5vh 0",
          }}
        >
          Keyword-matching algorithm categorizes any item into 1 of 5 groups instantly
        </p>

        {/* Flow diagram: step boxes */}
        <div style={{ display: "flex", alignItems: "stretch", gap: "0", flex: 1 }}>
          {/* Step 1 */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(90,138,90,0.08)",
              border: "1px solid rgba(90,138,90,0.25)",
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.12vw",
                marginBottom: "2vh",
              }}
            >
              STEP 01
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2vw", fontWeight: 700, color: "#E0EBE0", marginBottom: "1.5vh" }}>
                User Input
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.3vw", color: "#E0EBE0", opacity: 0.6, lineHeight: 1.5 }}>
                User types or describes any waste item — "old phone", "banana peel", "paint can"
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", padding: "0 0.8vw", color: "#5A8A5A", fontSize: "2vw" }}>
            →
          </div>

          {/* Step 2 */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(90,138,90,0.08)",
              border: "1px solid rgba(90,138,90,0.25)",
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.12vw",
                marginBottom: "2vh",
              }}
            >
              STEP 02
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2vw", fontWeight: 700, color: "#E0EBE0", marginBottom: "1.5vh" }}>
                AI Classification
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.3vw", color: "#E0EBE0", opacity: 0.6, lineHeight: 1.5 }}>
                Simulated AI keyword-matching scans the input against waste category rules
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", padding: "0 0.8vw", color: "#5A8A5A", fontSize: "2vw" }}>
            →
          </div>

          {/* Step 3 */}
          <div
            style={{
              flex: 1.3,
              backgroundColor: "rgba(90,138,90,0.13)",
              border: "1px solid rgba(90,138,90,0.45)",
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.12vw",
                marginBottom: "2vh",
              }}
            >
              STEP 03
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2vw", fontWeight: 700, color: "#E0EBE0", marginBottom: "1.5vh" }}>
              Result + Instructions
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.3vw", color: "#E0EBE0", opacity: 0.6, lineHeight: 1.5, marginBottom: "2vh" }}>
              Returns the category and precise safe-handling instructions
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#5A8A5A" }}>Recycle</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#5A8A5A" }}>Compost</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#5A8A5A" }}>E-Waste</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#5A8A5A" }}>Hazardous</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#5A8A5A" }}>Landfill</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontStyle: "italic", color: "#5A8A5A" }}>
            EcoSort AI
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.4 }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
