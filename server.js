// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// ✅ Middleware setup
app.use(
  cors({
    origin: [
      "http://localhost:5500", // local testing
      "https://afnuzacademy.vercel.app", // frontend deployed URL
      "https://afnuz-academy-production.up.railway.app", // backend itself
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// ✅ Gmail Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Gmail ID
    pass: process.env.EMAIL_PASS, // App password (not normal password)
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

// ✅ Default Root route (for Railway test)
app.get("/", (req, res) => {
  res.send("🚀 Afnuz Academy backend is running successfully on Railway!");
});

// ✅ Health check (useful for Railway auto-check)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy!" });
});

// ✅ Test email endpoint
app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "✅ Test Email from Afnuz Backend",
      text: "This is a test email to verify deployment and transporter.",
    });
    res.status(200).json({ msg: "✅ Test email sent successfully!" });
  } catch (error) {
    console.error("❌ Test email failed:", error);
    res.status(500).json({ msg: "Failed to send test email." });
  }
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

// ✅ Start Server (for Railway)
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`🔗 Health check: /health`);
  console.log(`📬 Test Email: /test-email`);
});
