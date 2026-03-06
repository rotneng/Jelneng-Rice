import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const videos = [
    { id: "S_pC8fM-t6Y", title: "GIZ / EU Delegation Visit" },
    { id: "5A8u2v_fCrs", title: "Leveraging Digital Agribusiness" },
    { id: "Hl9uL_i5U9M", title: "Field Operations 2025" },
    { id: "eX9R7tYJ1E4", title: "Premium Grain Processing" },
  ];

  const colors = {
    dark: "#0A1E14",
    gold: "#C5A059",
    white: "#FFFFFF",
    cream: "#FDFCF8",
    textGray: "#4A4A4A",
  };

  return (
    <section
      id="gallery"
      style={{ backgroundColor: colors.white, padding: "120px 0" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              color: colors.dark,
              fontWeight: "700",
              margin: 0,
            }}
          >
            Visual{" "}
            <span
              style={{
                color: colors.gold,
                fontStyle: "italic",
                fontWeight: "300",
              }}
            >
              Gallery
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              height: "3px",
              backgroundColor: colors.gold,
              margin: "25px auto 0",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${video.id}`,
                  "_blank",
                )
              }
              style={{
                position: "relative",
                cursor: "pointer",
                borderRadius: "15px",
                overflow: "hidden",
                aspectRatio: "16/10",
                backgroundColor: colors.dark,
                boxShadow: "0 20px 40px rgba(10, 30, 20, 0.1)",
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.7,
                  transition: "opacity 0.3s ease",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to top, ${colors.dark}CC 0%, transparent 100%)`,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(5px)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${colors.gold}`,
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderLeft: `16px solid ${colors.gold}`,
                      borderBottom: "10px solid transparent",
                      marginLeft: "5px",
                    }}
                  />
                </motion.div>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  padding: "20px",
                }}
              >
                <span
                  style={{
                    color: colors.white,
                    fontFamily: "serif",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "block",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {video.title}
                </span>
                <span
                  style={{
                    color: colors.gold,
                    fontSize: "10px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    fontWeight: "700",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  Watch Video
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
