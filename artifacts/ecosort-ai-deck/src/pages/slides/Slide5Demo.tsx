export default function Slide5Demo() {
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
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "4vh" }}>
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
            PROTOTYPE DEMO
          </div>
        </div>

        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "4vw",
            fontWeight: 400,
            color: "#E0EBE0",
            margin: "0 0 1vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.08vw",
          }}
        >
          Live Web App
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.4vw",
            color: "#E0EBE0",
            opacity: 0.55,
            margin: "0 0 4vh 0",
          }}
        >
          Built and deployed on Replit — paste screenshots of the working prototype below
        </p>

        {/* Two screenshot placeholders side by side */}
        <div style={{ display: "flex", flex: 1, gap: "3vw" }}>
          <div
            style={{
              flex: 1,
              border: "1px dashed rgba(90,138,90,0.4)",
              backgroundColor: "rgba(90,138,90,0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2vh",
            }}
          >
            <div
              style={{
                width: "4vw",
                height: "4vw",
                border: "1px solid rgba(90,138,90,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="2.5vw" height="2.5vw" viewBox="0 0 24 24" fill="none" stroke="#5A8A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.1vw",
                color: "#5A8A5A",
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              Screenshot — Input Screen
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.2vw",
                color: "#E0EBE0",
                opacity: 0.35,
                textAlign: "center",
                maxWidth: "20vw",
              }}
            >
              Paste a screenshot of the search input and example chips here
            </div>
          </div>

          <div
            style={{
              flex: 1,
              border: "1px dashed rgba(90,138,90,0.4)",
              backgroundColor: "rgba(90,138,90,0.04)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2vh",
            }}
          >
            <div
              style={{
                width: "4vw",
                height: "4vw",
                border: "1px solid rgba(90,138,90,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="2.5vw" height="2.5vw" viewBox="0 0 24 24" fill="none" stroke="#5A8A5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.1vw",
                color: "#5A8A5A",
                opacity: 0.7,
                textAlign: "center",
              }}
            >
              Screenshot — Classification Result
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.2vw",
                color: "#E0EBE0",
                opacity: 0.35,
                textAlign: "center",
                maxWidth: "20vw",
              }}
            >
              Paste a screenshot showing a classification result with category and instructions
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontStyle: "italic", color: "#5A8A5A" }}>
            EcoSort AI
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.4 }}>
            05
          </div>
        </div>
      </div>
    </div>
  );
}
