import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: "zjK6xhVMwXA", title: "GIZ / EU Delegation Visit" },
    { id: "2cKk_Q5SpN0", title: "Leveraging Digital Agribusiness" },
    { id: "b3jVQlAkvDQ", title: "Field Operations 2025" },
    { id: "3_iPrqFVo6E", title: "Premium Grain Processing" },
  ];

  const colors = {
    dark: "#0A1E14",
    gold: "#C5A059",
    white: "#FFFFFF",
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
            viewport={{ once: true }}
            style={{
              fontFamily: "serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              color: colors.dark,
              fontWeight: "700",
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
          <div
            style={{
              height: "3px",
              width: "80px",
              backgroundColor: colors.gold,
              margin: "25px auto 0",
            }}
          />
        </div>

        {/* Updated Grid Container */}
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            /* Default to 1 column for mobile */
            gridTemplateColumns: "1fr",
            gap: "25px",
          }}
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedVideo(video.id)}
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
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  opacity: 0.8,
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
                <div
                  style={{
                    width: "50px", // Scaled down slightly for 4-column layout
                    height: "50px",
                    borderRadius: "50%",
                    border: `1px solid ${colors.gold}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.3)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "8px solid transparent",
                      borderLeft: `14px solid ${colors.gold}`,
                      borderBottom: "8px solid transparent",
                      marginLeft: "4px",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "15px",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.9))",
                }}
              >
                <span
                  style={{
                    color: colors.white,
                    fontSize: "14px", // Reduced for smaller column width
                    fontWeight: "600",
                    display: "block",
                    lineHeight: "1.3",
                  }}
                >
                  {video.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(10, 30, 20, 0.95)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: "900px",
                aspectRatio: "16/9",
                position: "relative",
              }}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                }}
              >
                CLOSE ✕
              </button>

              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "8px", border: `1px solid ${colors.gold}33` }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          /* Desktop: 4 videos in a row */
          @media (min-width: 1024px) {
            .gallery-grid {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }

          /* Tablet: 2x2 grid */
          @media (min-width: 640px) and (max-width: 1023px) {
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;