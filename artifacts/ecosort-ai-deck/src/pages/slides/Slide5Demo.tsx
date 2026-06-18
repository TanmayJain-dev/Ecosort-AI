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

        {/* Two screenshots side by side */}
        <div style={{ display: "flex", flex: 1, gap: "3vw" }}>
          <div
            style={{
              flex: 1,
              border: "1px solid rgba(90,138,90,0.3)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                padding: "1.2vh 1.5vw",
                borderBottom: "1px solid rgba(90,138,90,0.2)",
                backgroundColor: "rgba(90,138,90,0.06)",
              }}
            >
              INPUT SCREEN
            </div>
            <img
              src={`${import.meta.env.BASE_URL}demo-input.png`}
              alt="EcoSort AI input screen"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                flex: 1,
              }}
            />
          </div>

          <div
            style={{
              flex: 1,
              border: "1px solid rgba(90,138,90,0.3)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                padding: "1.2vh 1.5vw",
                borderBottom: "1px solid rgba(90,138,90,0.2)",
                backgroundColor: "rgba(90,138,90,0.06)",
              }}
            >
              CLASSIFICATION RESULT
            </div>
            <img
              src={`${import.meta.env.BASE_URL}demo-result.png`}
              alt="EcoSort AI classification result"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                flex: 1,
              }}
            />
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
