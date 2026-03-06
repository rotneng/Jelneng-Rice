import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

const certifications = [
  {
    title: "NAFDAC",
    description:
      "Certified by the National Agency for Food and Drug Administration and Control",
    icon: <Award size={48} strokeWidth={1.2} />,
  },
  {
    title: "SON",
    description: "Approved by Standards Organisation of Nigeria",
    icon: <ShieldCheck size={48} strokeWidth={1.2} />,
  },
];

const CertificationsSection = () => {
  const colors = {
    dark: "#0A1E14",
    gold: "#C5A059",
    textGray: "#4A4A4A",
    white: "#FFFFFF",
    cream: "#FDFCF8",
  };

  return (
    <section style={{ backgroundColor: colors.white, padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              color: colors.dark,
              fontWeight: "700",
              margin: 0,
            }}
          >
            Certifications &{" "}
            <span
              style={{
                color: colors.gold,
                fontStyle: "italic",
                fontWeight: "300",
              }}
            >
              Awards
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              height: "3px",
              backgroundColor: colors.gold,
              margin: "20px auto 0",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(10, 30, 20, 0.08)",
              }}
              style={{
                backgroundColor: colors.white,
                borderRadius: "15px",
                padding: "60px 40px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                border: `1px solid ${colors.cream}`,
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  color: colors.gold,
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "30px",
                }}
              >
                {cert.icon}
              </div>

              <h3
                style={{
                  fontFamily: "serif",
                  color: colors.dark,
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                {cert.title}
              </h3>
              <p
                style={{
                  color: colors.textGray,
                  fontSize: "16px",
                  lineHeight: "1.7",
                  margin: 0,
                  fontWeight: "400",
                }}
              >
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
