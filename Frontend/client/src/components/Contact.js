import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const colors = {
    dark: "#0A1E14",
    light: "#C5A059",
    white: "#FFFFFF",
    border: "rgba(255, 255, 255, 0.1)",
    glass: "rgba(255, 255, 255, 0.03)",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const BASE_URL =
      window.location.hostname === "localhost"
        ? "http://localhost:5000"
        : "https://jelneng-backend.onrender.com";

    try {
      const response = await fetch(`${BASE_URL}/api/contact/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: "General Inquiry",
          message: formData.message,
        }),
      });

      // Removed unused 'data' variable to satisfy strict linters
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: colors.dark,
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Effect */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${colors.light}33 0%, transparent 70%)`,
          filter: "blur(80px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span
            style={{
              color: colors.light,
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "0.5em",
              fontSize: "10px",
              display: "block",
              marginBottom: "20px",
            }}
          >
            Inquiries
          </span>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontFamily: "serif",
              fontWeight: "bold",
              color: colors.white,
              lineHeight: 1.1,
              marginBottom: "32px",
            }}
          >
            Cultivate the <br />
            <span style={{ color: colors.light, fontStyle: "italic" }}>
              Future
            </span>{" "}
            With Us
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              maxWidth: "400px",
              marginBottom: "48px",
            }}
          >
            From bulk distribution to sustainable agribusiness partnerships, we
            provide the gold standard of Nigerian rice.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            {[
              { label: "Headquarters", value: "Jos, Plateau State, Nigeria" },
              { label: "Email Us", value: "contact@jelnengrice.com" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: `1px solid ${colors.light}`,
                  paddingLeft: "24px",
                }}
              >
                <span
                  style={{
                    color: colors.light,
                    fontSize: "9px",
                    fontWeight: "900",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  {item.label}
                </span>
                <p
                  style={{
                    color: colors.white,
                    fontSize: "1.2rem",
                    marginTop: "4px",
                    fontWeight: "300",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{
            backgroundColor: colors.glass,
            backdropFilter: "blur(20px)",
            padding: "48px",
            borderRadius: "2px",
            border: `1px solid ${colors.border}`,
            position: "relative",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <input
              type="text"
              required
              placeholder="Full Name"
              className="fine-input"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={inputStyle(colors)}
            />

            <input
              type="email"
              required
              placeholder="Email Address"
              className="fine-input"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={inputStyle(colors)}
            />

            <textarea
              required
              placeholder="How can we partner?"
              rows="4"
              className="fine-input"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              style={{ ...inputStyle(colors), resize: "none" }}
            />

            <motion.button
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor:
                  status === "success" ? "#2E7D32" : colors.light,
                color: colors.dark,
                border: "none",
                padding: "20px",
                fontSize: "11px",
                fontWeight: "900",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                cursor: "pointer",
                transition: "all 0.4s ease",
              }}
            >
              {status === "loading"
                ? "Processing..."
                : status === "success"
                  ? "Inquiry Sent"
                  : "Send Inquiry"}
            </motion.button>

            {status === "error" && (
              <p
                style={{
                  color: "#FF5252",
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "-20px",
                }}
              >
                Error sending inquiry. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <style>{`
        .fine-input::placeholder { color: rgba(255,255,255,0.2); text-transform: uppercase; font-size: 10px; letter-spacing: 0.2em; transition: all 0.3s ease; }
        .fine-input:focus::placeholder { opacity: 0; transform: translateY(-10px); }
        .fine-input:focus { border-bottom-color: #C5A059 !important; }
      `}</style>
    </section>
  );
};

const inputStyle = (colors) => ({
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: `1px solid ${colors.border}`,
  padding: "16px 0",
  color: colors.white,
  outline: "none",
  fontSize: "14px",
  letterSpacing: "0.05em",
});

export default Contact;
