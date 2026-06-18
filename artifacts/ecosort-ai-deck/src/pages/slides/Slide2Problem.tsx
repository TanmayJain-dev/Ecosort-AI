export default function Slide2Problem() {
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
      {/* Subtle background tint shape */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(90,138,90,0.07) 0%, transparent 60%)",
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
            PROBLEM STATEMENT
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flex: 1, gap: "7vw", alignItems: "center" }}>
          {/* Left: headline + SDG badge */}
          <div style={{ flex: "0 0 38vw", display: "flex", flexDirection: "column", gap: "3.5vh" }}>
            {/* SDG badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8vw",
                backgroundColor: "rgba(90,138,90,0.15)",
                border: "1px solid rgba(90,138,90,0.4)",
                padding: "1vh 1.5vw",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1vw",
                  color: "#5A8A5A",
                  fontWeight: 500,
                  letterSpacing: "0.08vw",
                }}
              >
                SDG 12
              </div>
              <div
                style={{
                  width: "1px",
                  height: "2vh",
                  backgroundColor: "rgba(90,138,90,0.4)",
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1vw",
                  color: "#E0EBE0",
                  opacity: 0.7,
                }}
              >
                Responsible Consumption &amp; Production
              </div>
            </div>

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
              The Waste Confusion Problem
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.5vw",
                color: "#E0EBE0",
                opacity: 0.65,
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              People are unsure about local waste rules — leading to costly mistakes at every level.
            </p>
          </div>

          {/* Right: three numbered problems */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div
                style={{
                  color: "#5A8A5A",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1.2vw",
                  paddingTop: "0.3vh",
                  minWidth: "2.5vw",
                }}
              >
                01
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.8vw",
                    fontWeight: 700,
                    color: "#E0EBE0",
                    marginBottom: "0.8vh",
                  }}
                >
                  Wishcycling
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.4vw",
                    color: "#E0EBE0",
                    opacity: 0.6,
                    lineHeight: 1.5,
                  }}
                >
                  Placing non-recyclables in recycling bins contaminates entire batches.
                </div>
              </div>
            </div>

            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(90,138,90,0.2)",
              }}
            />

            <div style={{ display: "flex", gap: "2vw" }}>
              <div
                style={{
                  color: "#5A8A5A",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1.2vw",
                  paddingTop: "0.3vh",
                  minWidth: "2.5vw",
                }}
              >
                02
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.8vw",
                    fontWeight: 700,
                    color: "#E0EBE0",
                    marginBottom: "0.8vh",
                  }}
                >
                  Landfill Contamination
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.4vw",
                    color: "#E0EBE0",
                    opacity: 0.6,
                    lineHeight: 1.5,
                  }}
                >
                  Organic and hazardous waste mixed with general trash accelerates decay and pollution.
                </div>
              </div>
            </div>

            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(90,138,90,0.2)",
              }}
            />

            <div style={{ display: "flex", gap: "2vw" }}>
              <div
                style={{
                  color: "#5A8A5A",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1.2vw",
                  paddingTop: "0.3vh",
                  minWidth: "2.5vw",
                }}
              >
                03
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.8vw",
                    fontWeight: 700,
                    color: "#E0EBE0",
                    marginBottom: "0.8vh",
                  }}
                >
                  Toxic E-Waste Leaks
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.4vw",
                    color: "#E0EBE0",
                    opacity: 0.6,
                    lineHeight: 1.5,
                  }}
                >
                  Batteries and electronics in general bins release heavy metals into soil and water.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
              fontStyle: "italic",
              color: "#5A8A5A",
            }}
          >
            EcoSort AI
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
              color: "#E0EBE0",
              opacity: 0.4,
            }}
          >
            02
          </div>
        </div>
      </div>
    </div>
  );
}
