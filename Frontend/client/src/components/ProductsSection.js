import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Long Grain Parboiled",
    weight: "50kg / 25kg / 10kg",
    // Detailed texture of golden-hued parboiled rice
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1000",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Premium Basmati",
    weight: "5kg / 2kg",
    // Clean, high-end look of white basmati grains
    image:
      "https://images.unsplash.com/photo-1723475158232-819e29803f4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFzbWF0aSUyMHJpY2V8ZW58MHx8MHx8fDA%3D",
    tag: "Export Quality",
  },
  {
    id: 3,
    name: "Organic Brown Rice",
    weight: "5kg / 1kg",
    // Earthy, natural brown rice texture
    image:
      "https://images.unsplash.com/photo-1561767782-d8e3aa77ef77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyb3duJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Health Choice",
  },
  {
    id: 4,
    name: "Rice Flour",
    weight: "5kg / 10kg",
    // Earthy, natural brown rice texture
    image:
      "https://images.unsplash.com/photo-1586137712370-9b450509c587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGZsb3VyfGVufDB8fDB8fHww",
    tag: "Bakers Choice",
  },
];

const ProductsSection = () => {
  const colors = {
    dark: "#0A1E14",
    gold: "#C5A059",
    white: "#FFFFFF",
    cream: "#FDFCF8",
  };

  return (
    <section
      id="products"
      style={{
        backgroundColor: colors.white,
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      {/* SECTION HEADER */}
      <div
        style={{ textAlign: "center", marginBottom: "80px", padding: "0 5%" }}
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{
            color: colors.gold,
            textTransform: "uppercase",
            letterSpacing: "5px",
            fontSize: "11px",
            fontWeight: "800",
            display: "block",
            marginBottom: "15px",
          }}
        >
          Premium Selection
        </motion.span>
        <h2
          style={{
            fontFamily: "serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            color: colors.dark,
            fontWeight: "700",
            margin: 0,
          }}
        >
          Our Harvest{" "}
          <span
            style={{
              fontStyle: "italic",
              color: colors.gold,
              fontWeight: "300",
            }}
          >
            Products
          </span>
        </h2>
        <div
          style={{
            width: "60px",
            height: "2px",
            backgroundColor: colors.gold,
            margin: "25px auto 0",
          }}
        />
      </div>

      {/* PRODUCTS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "80px 40px",
          padding: "0 5%",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="product-card"
          >
            {/* Image Container */}
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                backgroundColor: colors.dark,
                borderRadius: "4px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Tag Over Image */}
              <div
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "25px",
                  backgroundColor: "rgba(10, 30, 20, 0.85)",
                  backdropFilter: "blur(8px)",
                  color: colors.gold,
                  fontSize: "9px",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  padding: "10px 16px",
                  border: `1px solid ${colors.gold}44`,
                  zIndex: 3,
                }}
              >
                {product.tag}
              </div>

              {/* Hover Frame Effect */}
              <div
                className="hover-frame"
                style={{
                  position: "absolute",
                  inset: "20px",
                  border: `1px solid ${colors.gold}`,
                  opacity: 0,
                  transform: "scale(1.1)",
                  transition: "all 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
            </div>

            {/* Typography Section */}
            <div
              style={{
                marginTop: "35px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "serif",
                  fontSize: "26px",
                  color: colors.dark,
                  fontWeight: "700",
                  marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {product.name}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "1px",
                    backgroundColor: colors.gold,
                  }}
                />
                <span
                  style={{
                    color: colors.gold,
                    fontSize: "12px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                  }}
                >
                  {product.weight}
                </span>
                <div
                  style={{
                    width: "20px",
                    height: "1px",
                    backgroundColor: colors.gold,
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global CSS for the Hover Reveal */}
      <style>
        {`
          .product-card:hover .hover-frame {
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          
          .product-card:hover h3 {
            color: #C5A059;
            transition: color 0.4s ease;
          }

          @media (max-width: 768px) {
            .product-card { margin-bottom: 20px; }
          }
        `}
      </style>
    </section>
  );
};

export default ProductsSection;
