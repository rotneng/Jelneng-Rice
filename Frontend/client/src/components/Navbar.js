import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkDevice = () => setIsPhone(window.innerWidth <= 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const colors = {
    darkGreen: "#1B5E20",
    deepForest: "#0A1E14",
    gold: "#C5A059",
    white: "#FFFFFF",
  };

  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 30, 20, 1)", "rgba(10, 30, 20, 0.95)"],
  );

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: navBg,
        borderBottom: `1px solid ${colors.gold}33`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        height: "80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <motion.a href="#home" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "serif",
              fontSize: isPhone ? "1.2rem" : "1.5rem",
              color: colors.white,
              fontWeight: "700",
            }}
          >
            Jelneng{" "}
            <span
              style={{
                color: colors.gold,
                fontWeight: "300",
                fontStyle: "italic",
              }}
            >
              Rice
            </span>
          </span>
        </motion.a>

        {!isPhone && (
          <div style={{ display: "flex", gap: "5px" }}>
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{
                  color: colors.gold,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                style={{
                  fontSize: "11px",
                  color: colors.white,
                  textDecoration: "none",
                  padding: "8px 15px",
                  borderRadius: "4px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: "600",
                  transition: "color 0.2s ease",
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        )}

        {isPhone && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              position: "relative",
              zIndex: 10000,
            }}
          >
            <div
              style={{
                width: "25px",
                height: "2px",
                background: colors.gold,
                margin: "6px 0",
                transition: "0.3s",
                transform: isOpen ? "rotate(45deg) translate(5px, 6px)" : "",
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                background: colors.gold,
                margin: "6px 0",
                opacity: isOpen ? 0 : 1,
              }}
            />
            <div
              style={{
                width: "25px",
                height: "2px",
                background: colors.gold,
                margin: "6px 0",
                transition: "0.3s",
                transform: isOpen ? "rotate(-45deg) translate(5px, -7px)" : "",
              }}
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: colors.deepForest,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: "24px",
                  color: colors.white,
                  textDecoration: "none",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
