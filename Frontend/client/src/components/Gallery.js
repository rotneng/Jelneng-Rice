import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const videos = [
    { id: "S_pC8fM-t6Y", title: "GIZ /EU delegatio..." },
    { id: "5A8u2v_fCrs", title: "Leveraging digital..." },
    { id: "Hl9uL_i5U9M", title: "December 4, 2025" },
    { id: "eX9R7tYJ1E4", title: "PROCESSING OF ..." },
  ];

  const colors = {
    darkGreen: "#1B5E20",
    white: "#FFFFFF",
    youtubeRed: "#FF0000",
    textWhite: "#FFFFFF",
  };

  return (
    <section style={{ backgroundColor: colors.white, padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              color: colors.darkGreen,
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Our Gallery
          </h2>
          <div
            style={{
              width: "64px",
              height: "4px",
              backgroundColor: colors.darkGreen,
              margin: "0 auto",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.03 }}
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${video.id}`,
                  "_blank",
                )
              }
              style={{
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: "4px",
                aspectRatio: "1/1",
                backgroundColor: "#000",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectCover: "cover",
                  opacity: 0.9,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.2)",
                    }}
                  />
                  <span
                    style={{
                      color: colors.textWhite,
                      fontSize: "12px",
                      fontWeight: "500",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "140px",
                    }}
                  >
                    {video.title}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    marginTop: "4px",
                  }}
                >
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: "2.5px",
                        height: "2.5px",
                        backgroundColor: colors.white,
                        borderRadius: "50%",
                      }}
                    />
                  ))}
                </div>
              </div>

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
                    width: "56px",
                    height: "40px",
                    backgroundColor: colors.youtubeRed,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "8px solid transparent",
                      borderLeft: "14px solid white",
                      borderBottom: "8px solid transparent",
                      marginLeft: "4px",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "10px",
                    backgroundColor: colors.youtubeRed,
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "2.5px solid transparent",
                      borderLeft: "4.5px solid white",
                      borderBottom: "2.5px solid transparent",
                    }}
                  />
                </div>
                <span
                  style={{
                    color: colors.textWhite,
                    fontSize: "10px",
                    fontWeight: "bold",
                  }}
                >
                  YouTube
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
