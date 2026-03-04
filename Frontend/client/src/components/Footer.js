import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const colors = {
    dark: "#0A1E14",
    light: "#C5A059",
    white: "#FFFFFF",
    border: "rgba(255, 255, 255, 0.05)",
    muted: "rgba(255, 255, 255, 0.4)",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#050F0A", 
        color: colors.white,
        padding: "100px 0 40px 0",
        borderTop: `1px solid ${colors.border}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "15vw",
          fontWeight: "900",
          color: "rgba(255,255,255,0.02)",
          fontFamily: "serif",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        JELNENG RICE
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "60px",
            marginBottom: "80px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ gridColumn: "span 2" }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontFamily: "serif",
                fontWeight: "bold",
                marginBottom: "24px",
              }}
            >
              Jelneng{" "}
              <span
                style={{
                  color: colors.light,
                  fontStyle: "italic",
                  fontWeight: "300",
                }}
              >
                Rice
              </span>
            </h2>
            <p
              style={{
                color: colors.muted,
                maxWidth: "380px",
                fontSize: "14px",
                lineHeight: "1.8",
                letterSpacing: "0.01em",
              }}
            >
              Transforming the Nigerian agricultural landscape through
              innovation and a commitment to premium quality grains that nourish
              the nation.
            </p>
          </motion.div>

          {[
            {
              title: "Navigation",
              links: [
                { n: "Home", h: "#home" },
                { n: "Harvest", h: "#products" },
                { n: "Leadership", h: "#team" },
                { n: "Partners", h: "#contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { n: "Privacy Policy", h: "#" },
                { n: "Terms of Use", h: "#" },
                { n: "Certifications", h: "#" },
              ],
            },
          ].map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <h4
                style={{
                  fontSize: "10px",
                  fontWeight: "800",
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  color: colors.light,
                  marginBottom: "24px",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link, j) => (
                  <li key={j} style={{ marginBottom: "12px" }}>
                    <a
                      href={link.h}
                      className="footer-link"
                      style={{
                        color: colors.muted,
                        textDecoration: "none",
                        fontSize: "13px",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {link.n}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            borderTop: `1px solid ${colors.border}`,
            paddingTop: "40px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            {[Instagram, Twitter, Linkedin].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, color: colors.light }}
                href="#"
                style={{ color: colors.muted, transition: "color 0.3s" }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <p
            style={{
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            © 2026 Jelneng Nig. Ltd. Built for Excellence.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "transparent",
              border: `1px solid ${colors.border}`,
              color: colors.white,
              padding: "12px 20px",
              fontSize: "10px",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              cursor: "pointer",
              borderRadius: "2px",
            }}
          >
            Back to top <ArrowUp size={14} color={colors.light} />
          </motion.button>
        </div>
      </div>

      <style>
        {`
          .footer-link:hover {
            color: #C5A059 !important;
          }
          @media (max-width: 640px) {
            footer { padding: 60px 0 30px 0 !important; }
            div[style*="grid-template-columns"] { gap: 40px !important; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
