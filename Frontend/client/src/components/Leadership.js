import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Executive Director',
    role: 'Vision & Strategy',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Operations Lead',
    role: 'Farm Management',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Technical Head',
    role: 'Agro-Innovation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
  }
];

const Leadership = () => {
  const colors = {
    dark: '#0A1E14',
    light: '#C5A059',
    cream: '#F9F7F2', // Soft premium background
  };

  return (
    <section id="team" style={{ backgroundColor: colors.cream, padding: '120px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Area */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px', 
          marginBottom: '80px',
          borderLeft: `1px solid ${colors.light}`,
          paddingLeft: '32px'
        }}>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ 
              color: colors.light, 
              fontWeight: '800', 
              uppercase: 'true', 
              letterSpacing: '0.4em', 
              fontSize: '10px',
              textTransform: 'uppercase'
            }}
          >
            The Visionaries
          </motion.span>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontFamily: 'serif', 
            color: colors.dark, 
            fontWeight: 'bold',
            lineHeight: 1
          }}>
            Our <span style={{ fontStyle: 'italic', fontWeight: '300' }}>Leadership</span>
          </h2>
          <p style={{ 
            color: 'rgba(10, 30, 20, 0.6)', 
            maxWidth: '400px', 
            fontSize: '15px', 
            lineHeight: '1.6' 
          }}>
            Combining generational wisdom with the precision of modern agricultural technology.
          </p>
        </div>

        {/* Team Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px' 
        }}>
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="team-card"
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              {/* Image Container */}
              <div style={{ 
                position: 'relative', 
                aspectRatio: '4/5', 
                overflow: 'hidden', 
                backgroundColor: colors.dark,
                borderRadius: '2px'
              }}>
                <motion.img 
                  src={member.image} 
                  alt={member.name}
                  whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    filter: 'grayscale(100%)',
                    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
                <div style={{ 
                  absolute: 'true', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  height: '40%', 
                  background: 'linear-gradient(to top, rgba(10,30,20,0.8), transparent)',
                  position: 'absolute'
                }} />
              </div>

              {/* Text Info */}
              <div style={{ marginTop: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontFamily: 'serif', 
                  color: colors.dark, 
                  fontWeight: '700',
                  letterSpacing: '-0.01em'
                }}>
                  {member.name}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginTop: '8px' 
                }}>
                  <div style={{ width: '20px', height: '1px', backgroundColor: colors.light }} />
                  <span style={{ 
                    fontSize: '9px', 
                    fontWeight: '800', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.2em', 
                    color: colors.light 
                  }}>
                    {member.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
          @media (max-width: 375px) {
            section { padding: 60px 0 !important; }
            h2 { font-size: 2.5rem !important; }
            div[style*="grid-template-columns"] { gap: 60px !important; }
          }
          
          .team-card:hover h3 {
            color: #C5A059;
            transition: color 0.4s ease;
          }
        `}
      </style>
    </section>
  );
};

export default Leadership;