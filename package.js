require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (req, res) => {
  res.json({
    ok: true,
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Test Email Route
app.get('/test-email', async (req, res) => {
  try {
    await transporter.sendMail({
      from: '"Afnuz Academy" <afnuzacademy@gmail.com>',
      to: 'afnuzacademy@gmail.com',
      subject: 'Test Email from Backend',
      text: 'Backend is working perfectly!'
    });
    res.send('Test email sent successfully!');
  } catch (err) {
    res.status(500).send('Failed: ' + err.message);
  }
});

// Contact Form API
app.post('/send-email', async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ msg: 'All fields are required!' });
  }

  try {
    await transporter.sendMail({
      from: '"Afnuz Academy Contact" <afnuzacademy@gmail.com>',
      to: 'afnuzacademy@gmail.com',
      subject: 'New Inquiry from Website',
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <hr>
        <small>Sent from Afnuz Academy Website</small>
      `
    });

    res.json({ msg: 'Inquiry sent successfully!' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ msg: 'Failed to send email. Try again.' });
  }
});

// Gmail Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'afnuzacademy@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD  // 16-digit app password
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
  console.log(`Health: http://localhost:${PORT}/health`);
});