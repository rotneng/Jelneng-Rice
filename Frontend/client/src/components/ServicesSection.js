import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Rice Milling & Processing",
    description:
      "Pre-cleaning, paddy separation, whitening, grading, polishing, sorting and packaging.",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 40H40V30H20V40H10V10H20V20H40V10H50V40Z" fill="#C5A059" />
        <rect x="5" y="45" width="50" height="10" rx="2" fill="#C5A059" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Distribution & Logistics",
    description:
      "Nationwide delivery of our premium rice products to your doorstep.",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 25H35V45H5V25Z"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 30H45V45H35"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15" cy="50" r="5" fill="#C5A059" />
        <circle cx="40" cy="50" r="5" fill="#C5A059" />
        <path
          d="M10 20L15 25"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Agribusiness Consulting",
    description:
      "Expert advice on rice farming and agribusiness for optimal results.",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 15C35.5228 15 40 19.4772 40 25C40 30.5228 35.5228 35 30 35C24.4772 35 20 30.5228 20 25C20 19.4772 24.4772 15 30 15Z"
          stroke="#C5A059"
          strokeWidth="3"
        />
        <path
          d="M10 50C10 38.9543 18.9543 30 30 30C41.0457 30 50 38.9543 50 50"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M45 15L50 20L45 25"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Branding & Packaging",
    description:
      "Custom branding and packaging services for individuals and organizations.",
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="10"
          width="40"
          height="40"
          rx="4"
          stroke="#C5A059"
          strokeWidth="3"
        />
        <path
          d="M30 10V50"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10 30H50"
          stroke="#C5A059"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="30" cy="30" r="5" fill="#C5A059" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  const colors = {
    dark: "#0A1E14",
    gold: "#C5A059",
    textGray: "#4A4A4A",
    white: "#FFFFFF",
    cream: "#FDFCF8",
  };

  return (
    <section
      id="services"
      style={{ backgroundColor: colors.cream, padding: "120px 0" }}
    >
      <div
        style={{ textAlign: "center", marginBottom: "80px", padding: "0 5%" }}
      >
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
          Our{" "}
          <span
            style={{
              color: colors.gold,
              fontStyle: "italic",
              fontWeight: "300",
            }}
          >
            Services
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
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          padding: "0 5%",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            style={{
              backgroundColor: colors.white,
              padding: "50px 30px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 15px 35px rgba(10, 30, 20, 0.05)",
              border: `1px solid rgba(197, 160, 89, 0.1)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ marginBottom: "30px", opacity: 0.9 }}>
              {service.icon}
            </div>

            <h3
              style={{
                fontFamily: "serif",
                color: colors.dark,
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "15px",
                minHeight: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: colors.textGray,
                fontSize: "15px",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
