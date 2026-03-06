import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Jelneng Nigeria Limited has been our trusted rice supplier for over 3 years. Their products are consistently high quality and their delivery is always on time. Highly recommended!",
    name: "Michael Brown",
    role: "Restaurant Owner",
  },
  {
    id: 2,
    quote:
      "The consistency in the grain length and the cleanliness of their parboiled rice is unmatched in the region. It has significantly elevated our catering standards.",
    name: "Sarah Adenuga",
    role: "Executive Chef, Jos Heights",
  },
  {
    id: 3,
    quote:
      "Working with Jelneng on branding and packaging was a seamless experience. They understand the rice value chain better than anyone else we have partnered with.",
    name: "Alhaji Ibrahim Musa",
    role: "Agro-Distributor",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const colors = {
    dark: "#0A1E14",
    gold: "#C5A059",
    textGray: "#4A4A4A",
    white: "#FFFFFF",
    cream: "#FDFCF8",
    dotInactive: "#E0E0E0",
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      style={{
        backgroundColor: colors.white,
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
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
              margin: 0,
            }}
          >
            Client{" "}
            <span
              style={{
                color: colors.gold,
                fontStyle: "italic",
                fontWeight: "300",
              }}
            >
              Voices
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              height: "3px",
              backgroundColor: colors.gold,
              margin: "25px auto 0",
            }}
          />
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: "relative",
            textAlign: "center",
            minHeight: "380px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ width: "100%", maxWidth: "800px" }}
            >
              <div
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: "20px",
                  padding: "60px 40px",
                  boxShadow: "0 30px 60px rgba(10, 30, 20, 0.05)",
                  border: `1px solid rgba(197, 160, 89, 0.1)`,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "40px",
                    fontSize: "80px",
                    color: colors.gold,
                    opacity: 0.2,
                    fontFamily: "serif",
                  }}
                >
                  “
                </span>

                <blockquote
                  style={{
                    margin: "0 0 40px 0",
                    fontSize: "clamp(18px, 2.5vw, 22px)",
                    lineHeight: "1.8",
                    color: colors.textGray,
                    fontFamily: "serif",
                    fontStyle: "italic",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {testimonials[activeIndex].quote}
                </blockquote>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <h4
                    style={{
                      color: colors.dark,
                      fontSize: "18px",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      margin: "0 0 5px 0",
                    }}
                  >
                    {testimonials[activeIndex].name}
                  </h4>
                  <p
                    style={{
                      color: colors.gold,
                      fontSize: "14px",
                      fontWeight: "600",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: index === activeIndex ? "40px" : "10px",
                height: "6px",
                borderRadius: "10px",
                border: "none",
                backgroundColor:
                  index === activeIndex ? colors.gold : colors.dotInactive,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
