import React from 'react';
import { motion } from 'framer-motion';
// For the icons, you can use Lucide-React or simply use the SVG paths provided
import { Award, ShieldCheck } from 'lucide-react'; 

const certifications = [
  {
    title: "NAFDAC",
    description: "Certified by the National Agency for Food and Drug Administration and Control",
    icon: <Award size={48} strokeWidth={1.5} />
  },
  {
    title: "SON",
    description: "Approved by Standards Organisation of Nigeria",
    icon: <ShieldCheck size={48} strokeWidth={1.5} />
  }
];

const CertificationsSection = () => {
  const colors = {
    darkGreen: '#1B5E20',
    textGray: '#333333',
    white: '#FFFFFF',
    cream: '#F9F7F2'
  };

  return (
    <section style={{ backgroundColor: colors.white, padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* SECTION HEADER - Matched to image_f2e549.png */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            color: colors.darkGreen, 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '10px' 
          }}>
            Certifications & Awards
          </h2>
          <div style={{ 
            width: '60px', 
            height: '3px', 
            backgroundColor: colors.darkGreen, 
            margin: '0 auto' 
          }} />
        </div>

        {/* CARDS GRID */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: colors.white,
                borderRadius: '12px',
                padding: '50px 40px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0'
              }}
            >
              {/* GREEN ICON */}
              <div style={{ 
                color: colors.darkGreen, 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '25px' 
              }}>
                {cert.icon}
              </div>

              {/* TEXT CONTENT - Matched to image_f2e549.png */}
              <h3 style={{ 
                color: colors.darkGreen, 
                fontSize: '20px', 
                fontWeight: 'bold', 
                marginBottom: '15px',
                letterSpacing: '1px'
              }}>
                {cert.title}
              </h3>
              <p style={{ 
                color: colors.textGray, 
                fontSize: '15px', 
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.8
              }}>
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;