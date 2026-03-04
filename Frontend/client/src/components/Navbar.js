import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkDevice = () => {
      // 480px is the sweet spot: covers all Pro Max/Ultra phones 
      // but is much smaller than an iPad (768px+)
      setIsPhone(window.innerWidth <= 480);
    };
    
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const navHeight = useTransform(scrollY, [0, 100], ["100px", "80px"]);
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 30, 20, 1)", "rgba(10, 30, 20, 0.98)"],
  );

  const colors = {
    dark: "#0A1E14",
    gold: "#C5A059",
    white: "#FFFFFF",
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Our Harvest", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Leadership", href: "#team" },
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: isOpen ? "auto" : navHeight,
        backgroundColor: navBg,
        borderBottom: `1px solid ${colors.gold}33`,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "height 0.3s ease"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          height: "100%",
          minHeight: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 5%",
        }}
      >
        {/* Logo */}
        <motion.a href="#home" style={{ textDecoration: "none" }}>
          <span style={{ 
            fontFamily: "serif", 
            fontSize: isPhone ? "1.1rem" : "1.3rem", 
            color: colors.white, 
            fontWeight: "700" 
          }}>
            Jelneng <span style={{ color: colors.gold, fontWeight: "300", fontStyle: "italic" }}>Rice</span>
          </span>
        </motion.a>

        {/* Desktop View (Ipads & Laptops) */}
        {!isPhone && (
          <div style={{ display: "flex", gap: "10px" }}>
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                whileHover={{ color: colors.gold }}
                style={{
                  fontSize: "11px",
                  color: colors.white,
                  textDecoration: "none",
                  padding: "10px 12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontWeight: "600",
                  transition: "color 0.2s ease"
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        )}

        {/* Hamburger Icon (Phones Only) */}
        {isPhone && (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "10px" }}
          >
            <motion.div 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              style={{ width: "24px", height: "2px", background: colors.gold, margin: "5px 0" }} 
            />
            <motion.div 
              animate={{ opacity: isOpen ? 0 : 1 }}
              style={{ width: "24px", height: "2px", background: colors.gold, margin: "5px 0" }} 
            />
            <motion.div 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              style={{ width: "24px", height: "2px", background: colors.gold, margin: "5px 0" }} 
            />
          </button>
        )}
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && isPhone && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ width: "100%", backgroundColor: colors.dark, overflow: "hidden" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "20px 8%",
                  color: colors.white,
                  textDecoration: "none",
                  borderTop: "1px solid rgba(197, 160, 89, 0.1)",
                  fontSize: "13px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
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