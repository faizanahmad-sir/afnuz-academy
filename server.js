<<<<<<< HEAD
// ✅ Start Server (Production Safe)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`🔗 Test Email: /test-email`);
  console.log(`💚 Health: /health`);
});
=======
// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// ✅ Middleware setup
app.use(cors({ origin: "*" })); // Allow all origins (for now)
app.use(express.json()); // Parse incoming JSON

// ✅ Gmail Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS, // your app password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// ✅ Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Mail transporter verify failed:", error.message);
  } else {
    console.log("✅ Mail transporter is ready to send emails!");
  }
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🚀 Afnuz Academy backend is running successfully!");
});

// ✅ Send Email Route
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, whatsapp, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ msg: "Name and Email are required!" });
    }

    // 📨 Mail to academy
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "afnuzacademy@gmail.com",
      subject: `📩 New Inquiry from ${name}`,
      text: `
You received a new inquiry from your website:

👤 Name: ${name}
📧 Email: ${email}
📱 WhatsApp: ${whatsapp || "Not provided"}
💬 Message: ${message || "No message provided"}

Sent via Afnuz Academy Website 🚀
      `,
    };

    // Send to academy
    const info = await transporter.sendMail(mailOptions);
    console.log("📨 Inquiry email sent:", info.response);

    // 📤 Auto reply to user
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Afnuz Academy 🎓",
      text: `Hello ${name},

Thank you for reaching out to Afnuz Academy!
Our team will contact you soon.

Best Regards,
Afnuz Academy`,
    };

    await transporter.sendMail(autoReply);

    res.status(200).json({ success: true, msg: "Inquiry sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, msg: "Failed to send email." });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
>>>>>>> bde39e5fd07fc7b6b15e3b10e55622e25dc7d3b3
