const Contact = require('../Models/Contact');
const { sendContactEmail } = require('../Services/emailService');

exports.submitInquiry = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newInquiry = new Contact({ name, email, subject, message });
    await newInquiry.save();

    await sendContactEmail({ name, email, subject, message });

    res.status(201).json({ 
      success: true, 
      message: 'Your inquiry has been sent and saved successfully.' 
    });
  } catch (error) {
    console.error('Contact Controller Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'There was an error processing your request.' 
    });
  }
};