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
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 40H40V30H20V40H10V10H20V20H40V10H50V40Z" fill="#1B5E20" />
        <rect x="5" y="45" width="50" height="10" rx="2" fill="#1B5E20" />
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
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 25H35V45H5V25Z"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 30H45V45H35"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="15" cy="50" r="5" fill="#1B5E20" />
        <circle cx="40" cy="50" r="5" fill="#1B5E20" />
        <path
          d="M10 20L15 25"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Consulting Services",
    description:
      "Expert advice on rice farming and agribusiness for optimal results.",
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 15C35.5228 15 40 19.4772 40 25C40 30.5228 35.5228 35 30 35C24.4772 35 20 30.5228 20 25C20 19.4772 24.4772 15 30 15Z"
          stroke="#1B5E20"
          strokeWidth="4"
        />
        <path
          d="M10 50C10 38.9543 18.9543 30 30 30C41.0457 30 50 38.9543 50 50"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M45 15L50 20L45 25"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Rice Branding & Packaging",
    description:
      "Custom branding and packaging services for individuals, organizations and Government.",
    icon: (
      <svg
        width="60"
        height="60"
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
          stroke="#1B5E20"
          strokeWidth="4"
        />
        <path
          d="M30 10V50"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M10 30H50"
          stroke="#1B5E20"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="30" cy="30" r="5" fill="#1B5E20" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  const colors = {
    darkGreen: "#1B5E20",
    textGray: "#333333",
    white: "#FFFFFF",
    cream: "#F9F7F2",
  };

  return (
    <section style={{ backgroundColor: colors.white, padding: "100px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2
          style={{
            color: colors.darkGreen,
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Our Services
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
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "0 5%",
          maxWidth: "1400px",
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
            style={{
              backgroundColor: colors.cream,
              padding: "40px 20px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
              border: `1px solid ${colors.darkGreen}10`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ marginBottom: "25px" }}>{service.icon}</div>

            <h3
              style={{
                color: colors.darkGreen,
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "12px",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                color: colors.textGray,
                fontSize: "13.5px",
                lineHeight: "1.5",
                opacity: 0.8,
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
