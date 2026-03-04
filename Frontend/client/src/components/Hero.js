import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664117187648-5c84f3ea6b03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmljZSUyMGZhcm18ZW58MHx8MHx8fDA%3D",
    title: "Rooted in Quality",
    tagline: "Your Trusted Partner in Agribusiness",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=2070",
    title: "Sustainable Growth",
    tagline: "We Farm, Process, Package and Sell Rice",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2070",
    title: "Pure Excellence",
    tagline: "Premium Rice Products and Services",
  },
];

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Staff Members", value: "36" },
  { label: "Metric Tonnes / Day", value: "16" },
  { label: "Million Metric Tonnes Total", value: "20" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(timer);
    };
  }, []);

  const isMobile = windowWidth <= 480;
  const isTablet = windowWidth <= 768;

  const colors = {
    gold: "#C5A059",
    darkGreen: "#0A1E14",
    offWhite: "#FDFCF8",
  };

  const styles = {
    section: {
      position: "relative",
      width: "100%",
      backgroundColor: colors.offWhite,
      fontFamily: "'Inter', sans-serif",
    },
    heroWrapper: {
      position: "relative",
      height: isMobile ? "85vh" : "92vh",
      minHeight: isMobile ? "550px" : "700px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    bgOverlay: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background:
        "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
    },
    glassCard: {
      position: "relative",
      zIndex: 10,
      padding: isMobile ? "40px 20px" : "60px 40px",
      width: "90%",
      maxWidth: "750px",
      textAlign: "center",
      borderRadius: isMobile ? "24px" : "32px",
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "center",
      gap: isMobile ? "12px" : "20px",
    },
    buttonPrimary: {
      backgroundColor: colors.gold,
      color: "white",
      padding: isMobile ? "14px 28px" : "16px 40px",
      borderRadius: "50px",
      border: "none",
      fontWeight: "700",
      cursor: "pointer",
      textTransform: "uppercase",
      fontSize: isMobile ? "11px" : "13px",
      letterSpacing: "2px",
      boxShadow: "0 10px 20px rgba(197, 160, 89, 0.2)",
    },
    buttonSecondary: {
      backgroundColor: "transparent",
      color: "white",
      padding: isMobile ? "14px 28px" : "16px 40px",
      borderRadius: "50px",
      border: "1px solid rgba(255,255,255,0.4)",
      fontWeight: "700",
      cursor: "pointer",
      textTransform: "uppercase",
      fontSize: isMobile ? "11px" : "13px",
      letterSpacing: "2px",
    },
    statsContainer: {
      position: "relative",
      zIndex: 20,
      maxWidth: "1100px",
      margin: isMobile ? "-40px auto 0 auto" : "-75px auto 0 auto",
      padding: "0 20px",
    },
    statsGrid: {
      display: "flex",
      flexWrap: "wrap", 
      backgroundColor: "white",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 30px 60px rgba(0,0,0,0.05)",
      border: "1px solid rgba(0,0,0,0.03)",
    },
    statBox: {
      flex: isTablet ? "1 1 50%" : "1", 
      padding: isMobile ? "30px 15px" : "45px 20px",
      textAlign: "center",
      borderRight: isTablet ? "none" : "1px solid #F0F0F0",
      borderBottom: isTablet ? "1px solid #F0F0F0" : "none",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.heroWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("${slides[index].image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={styles.bgOverlay} />
          </motion.div>
        </AnimatePresence>

        <motion.div
          style={styles.glassCard}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.p
            key={`title-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              color: colors.gold,
              fontWeight: "800",
              letterSpacing: isMobile ? "2px" : "4px",
              textTransform: "uppercase",
              fontSize: isMobile ? "9px" : "11px",
              marginBottom: "15px",
            }}
          >
            Jelneng Rice • {slides[index].title}
          </motion.p>
          <h1
            style={{
              color: "white",
              fontSize: isMobile ? "32px" : "clamp(42px, 6vw, 72px)",
              margin: "0 0 20px 0",
              lineHeight: 1.1,
              fontWeight: "800",
              fontFamily: "serif",
            }}
          >
            Jelneng Nig. Ltd <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "300",
                opacity: 0.9,
                color: colors.gold,
              }}
            >
              Premium Grains
            </span>
          </h1>
          <motion.p
            key={`tag-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: isMobile ? "15px" : "19px",
              marginBottom: isMobile ? "30px" : "45px",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            {slides[index].tagline}
          </motion.p>
          <div style={styles.buttonContainer}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#D4B374" }}
              whileTap={{ scale: 0.95 }}
              style={styles.buttonPrimary}
            >
              Explore Process
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, border: "1px solid white" }}
              whileTap={{ scale: 0.95 }}
              style={styles.buttonSecondary}
            >
              Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div style={styles.statsContainer}>
        <div style={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              style={{
                ...styles.statBox,
                flex:
                  windowWidth <= 480 ? "1 1 100%" : isTablet ? "1 1 50%" : "1",
              }}
              whileHover={{ backgroundColor: "#FAFAFA" }}
            >
              <div
                style={{
                  fontSize: isMobile ? "32px" : "42px",
                  fontWeight: "800",
                  color: colors.darkGreen,
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: "700",
                  color: colors.gold,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ height: isMobile ? "60px" : "120px" }} />
    </section>
  );
};

export default Hero;
