const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendContactEmail = async (contactData) => {
  const { name, email, subject, message } = contactData;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Jelneng Website Inquiry: ${subject}`,
    html: `
      <div style="font-family: serif; color: #0A1E14; padding: 20px; border: 1px solid #C5A059;">
        <h2 style="color: #C5A059; border-bottom: 1px solid #C5A059;">New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background: #FDFCF8; padding: 15px; margin-top: 10px; border-radius: 4px;">
          <p>${message}</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };