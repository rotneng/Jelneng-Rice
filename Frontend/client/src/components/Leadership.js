import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Godwin Gogwin",
    role: "Chief Executive Officer",
    image: "https://jelneng.com/img/team-1.jpg",
    socials: { linkedin: "", twitter: "", facebook: "" }
  },
  {
    name: "Nendir Gogwin",
    role: "Chief Financial Officer",
    image: "https://jelneng.com/img/team-2.jpg",
    socials: { linkedin: "", twitter: "", facebook: "" }
  },
  {
    name: "Gontur Godwin Tongji Esq.",
    role: "Company Secretary",
    image: "https://jelneng.com/img/team-6.jpg",
    socials: { linkedin: "", twitter: "", facebook: "" }
  },
  {
    name: "Gowal Gakdima",
    role: "Brand/Coporate Communications Manager",
    image: "https://jelneng.com/img/team-3.jpg",
    socials: { linkedin: "", twitter: "", facebook: "" }
  },
  {
    name: "Gideon Dokchime Daniel",
    role: "Accountant",
    image: "https://jelneng.com/img/team-5.jpg",
    socials: { linkedin: "", twitter: "", facebook: "" }
  },
  {
    name: "Genesis Wokhishangeh Kassem",
    role: "Factory Manager",
    image: "https://jelneng.com/img/team-4.jpeg",
    socials: { linkedin: "", twitter: "", facebook: "" }
  },
];

const Leadership = () => {
  const colors = {
    dark: "#0A1E14",
    light: "#C5A059",
    cream: "#F9F7F2",
  };

  const SocialIcon = ({ path }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path} />
    </svg>
  );

  const iconPaths = {
    linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
    twitter: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  };

  return (
    <section id="team" style={{ backgroundColor: colors.cream, padding: "100px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "60px", borderLeft: `1px solid ${colors.light}`, paddingLeft: "32px" }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ color: colors.light, fontWeight: "800", letterSpacing: "0.4em", fontSize: "10px", textTransform: "uppercase" }}
          >
            The Visionaries
          </motion.span>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "serif", color: colors.dark, fontWeight: "bold", lineHeight: 1 }}>
            Our <span style={{ fontStyle: "italic", fontWeight: "300" }}>Team</span>
          </h2>
        </div>

        <div className="leadership-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr", 
          gap: "40px" 
        }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="team-card"
              style={{ margin: "0 auto", width: "100%", maxWidth: "450px" }} 
            >
              <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", backgroundColor: colors.dark, borderRadius: "4px" }}>
                <motion.img
                  src={member.image}
                  alt={member.name}
                  whileHover={{ scale: 1.05 }}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)", transition: "all 0.6s ease" }}
                />
              </div>

              <div style={{ marginTop: "20px", justifyContent: "center", textAlign: "center" }}>
                <h3 style={{ fontSize: "18px", fontFamily: "serif", color: colors.dark, fontWeight: "700" }}>
                  {member.name}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "5px", justifyContent: "center" }}>
                  <div style={{ width: "15px", height: "1px", backgroundColor: colors.light }} />
                  <span style={{ fontSize: "9px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em", color: colors.light }}>
                    {member.role}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "15px", marginTop: "15px", justifyContent: "center" }}>
                  <a href={member.socials.linkedin} className="social-icon"><SocialIcon path={iconPaths.linkedin} /></a>
                  <a href={member.socials.twitter} className="social-icon"><SocialIcon path={iconPaths.twitter} /></a>
                  <a href={member.socials.facebook} className="social-icon"><SocialIcon path={iconPaths.facebook} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
          /* Desktop: 3 columns */
          @media (min-width: 1024px) {
            .leadership-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }

          /* Tablet: 2 columns */
          @media (min-width: 641px) and (max-width: 1023px) {
            .leadership-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* General hover effects */
          .team-card:hover img {
            filter: grayscale(0%) !important;
          }
          
          .social-icon {
            color: rgba(10, 30, 20, 0.4);
            transition: all 0.3s ease;
          }

          .social-icon:hover {
            color: #C5A059;
            transform: translateY(-2px);
          }
        `}
      </style>
    </section>
  );
};

export default Leadership;