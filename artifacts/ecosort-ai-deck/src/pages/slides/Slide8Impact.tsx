const base = import.meta.env.BASE_URL;

export default function Slide8Impact() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#080C08", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Background image at low opacity */}
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
          opacity: 0.12,
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to bottom, rgba(8,12,8,0.6) 0%, rgba(8,12,8,0.8) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
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
            EXPECTED IMPACT
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
          Environmental &amp; Social Impact
        </h2>

        {/* Two columns */}
        <div style={{ display: "flex", flex: 1, gap: "5vw", alignItems: "stretch" }}>
          {/* Environmental */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
                paddingBottom: "1.5vh",
                borderBottom: "1px solid rgba(90,138,90,0.3)",
              }}
            >
              Environmental Impact
            </div>

            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "0.4vw",
                  height: "0.4vw",
                  backgroundColor: "#5A8A5A",
                  borderRadius: "50%",
                  marginTop: "0.8vh",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.5vw",
                  color: "#E0EBE0",
                  opacity: 0.75,
                  lineHeight: 1.55,
                }}
              >
                Reduced greenhouse gas emissions — organic waste correctly composted instead of rotting in landfill stops methane from entering the atmosphere
              </div>
            </div>

            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "0.4vw",
                  height: "0.4vw",
                  backgroundColor: "#5A8A5A",
                  borderRadius: "50%",
                  marginTop: "0.8vh",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.5vw",
                  color: "#E0EBE0",
                  opacity: 0.75,
                  lineHeight: 1.55,
                }}
              >
                Preventing toxic battery and e-waste leaks — heavy metals kept out of soil and groundwater, protecting local ecosystems
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              backgroundColor: "rgba(90,138,90,0.2)",
              flexShrink: 0,
            }}
          />

          {/* Social */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
                paddingBottom: "1.5vh",
                borderBottom: "1px solid rgba(90,138,90,0.3)",
              }}
            >
              Social Impact
            </div>

            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "0.4vw",
                  height: "0.4vw",
                  backgroundColor: "#5A8A5A",
                  borderRadius: "50%",
                  marginTop: "0.8vh",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.5vw",
                  color: "#E0EBE0",
                  opacity: 0.75,
                  lineHeight: 1.55,
                }}
              >
                Educating communities on correct waste handling — raising awareness one item at a time, building habits that scale across households and schools
              </div>
            </div>

            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "0.4vw",
                  height: "0.4vw",
                  backgroundColor: "#5A8A5A",
                  borderRadius: "50%",
                  marginTop: "0.8vh",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.5vw",
                  color: "#E0EBE0",
                  opacity: 0.75,
                  lineHeight: 1.55,
                }}
              >
                Closing the knowledge gap for underserved communities who lack access to clear municipal waste guidelines
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontStyle: "italic", color: "#5A8A5A" }}>
            EcoSort AI · SDG 12
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.4 }}>
            08
          </div>
        </div>
      </div>
    </div>
  );
}
