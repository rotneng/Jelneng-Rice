import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../Images/About.png";

const AboutUs = () => {
  const colors = {
    dark: "#0A1E14",
    gold: "#C5A059",
    white: "#FFFFFF",
    cream: "#FDFCF8",
    textGray: "#4A4A4A",
  };

  return (
    <section
      id="about"
      style={{
        backgroundColor: colors.cream,
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5%" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              color: colors.gold,
              textTransform: "uppercase",
              letterSpacing: "6px",
              fontSize: "12px",
              fontWeight: "800",
              display: "block",
              marginBottom: "15px",
            }}
          >
            Since 2019
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "serif",
              fontSize: "clamp(38px, 5vw, 56px)",
              color: colors.dark,
              fontWeight: "700",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Our Story &{" "}
            <span
              style={{
                color: colors.gold,
                fontStyle: "italic",
                fontWeight: "300",
              }}
            >
              Legacy
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{ position: "relative" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                position: "relative",
                zIndex: 2,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(10, 30, 20, 0.15)",
                aspectRatio: "4/5",
              }}
            >
              <img
                src={AboutImage}
                alt="Jelneng Rice Quality"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-10px",
                backgroundColor: colors.dark,
                color: "white",
                borderRadius: "50%",
                zIndex: 3,
                width: "140px",
                height: "140px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: `8px solid ${colors.cream}`,
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: colors.gold,
                }}
              >
                6+
              </span>
              <span
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  lineHeight: 1.2,
                  width: "80px",
                }}
              >
                Years of Excellence
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontFamily: "serif",
                fontSize: "clamp(28px, 3.5vw, 36px)",
                color: colors.dark,
                lineHeight: 1.2,
                marginBottom: "25px",
                fontWeight: "700",
              }}
            >
              Nurturing the Land, <br />
              Feeding the Nation.
            </h3>

            <p
              style={{
                color: colors.textGray,
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              We are a leading agribusiness company based in Jos, Plateau State.
              Incorporated in 2019, we have been at the forefront of the rice
              industry, dedicated to farming, processing, and packaging
              high-quality premium grains.
            </p>

            <p
              style={{
                color: colors.textGray,
                fontSize: "17px",
                lineHeight: "1.8",
                marginBottom: "35px",
                opacity: 0.9,
              }}
            >
              Our impact is felt across the entire value chain. With over{" "}
              <strong style={{ color: colors.dark }}>
                20 Million metric tonnes
              </strong>{" "}
              processed, we empower local farmers and provide food security for
              government agencies and families nationwide.
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              style={{
                backgroundColor: "transparent",
                border: "none",
                borderBottom: `2px solid ${colors.gold}`,
                color: colors.dark,
                paddingBottom: "8px",
                fontSize: "14px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "2px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.gold)}
              onMouseLeave={(e) => (e.target.style.color = colors.dark)}
            >
              Learn More About Us <span style={{ fontSize: "20px" }}>→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
