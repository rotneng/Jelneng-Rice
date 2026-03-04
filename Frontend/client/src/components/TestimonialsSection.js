import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      '"Jelneng Nigeria Limited has been our trusted rice supplier for over 3 years. Their products are consistently high quality and their delivery is always on time. Highly recommended!"',
    name: "Michael Brown",
    role: "Restaurant Owner",
  },
  {
    id: 2,
    quote:
      '"The consistency in the grain length and the cleanliness of their parboiled rice is unmatched in the region. It has significantly elevated our catering standards."',
    name: "Sarah Adenuga",
    role: "Executive Chef, Jos Heights",
  },
  {
    id: 3,
    quote:
      '"Working with Jelneng on branding and packaging was a seamless experience. They understand the rice value chain better than anyone else we have partnered with."',
    name: "Alhaji Ibrahim Musa",
    role: "Agro-Distributor",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const colors = {
    darkGreen: "#1B5E20",
    textGray: "#333333",
    white: "#FFFFFF",
    cream: "#F9F7F2",
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
    <section style={{ backgroundColor: colors.white, padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              color: colors.darkGreen,
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Customer Testimonials
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: colors.darkGreen,
              margin: "0 auto",
            }}
          />
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: "relative",
            textAlign: "center",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%", maxWidth: "850px" }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundColor: colors.cream,
                  borderRadius: "16px",
                  padding: "60px 80px",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
                  border: `1px solid ${colors.darkGreen}15`,
                }}
              >
                <blockquote
                  style={{
                    margin: "0 0 35px 0",
                    fontSize: "19px",
                    lineHeight: "1.8",
                    color: colors.textGray,
                    fontWeight: "500",
                    fontStyle: "italic",
                  }}
                >
                  {testimonials[activeIndex].quote}
                </blockquote>

                <h4
                  style={{
                    color: colors.darkGreen,
                    fontSize: "20px",
                    fontWeight: "bold",
                    margin: "0 0 5px 0",
                  }}
                >
                  {testimonials[activeIndex].name}
                </h4>
                <p
                  style={{
                    color: colors.textGray,
                    fontSize: "15px",
                    fontWeight: "500",
                    margin: 0,
                    opacity: 0.8,
                  }}
                >
                  {testimonials[activeIndex].role}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "30px",
          }}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: index === activeIndex ? "32px" : "12px",
                height: "12px",
                borderRadius: "10px",
                border: "none",
                backgroundColor:
                  index === activeIndex ? colors.darkGreen : colors.dotInactive,
                transition: "all 0.4s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
