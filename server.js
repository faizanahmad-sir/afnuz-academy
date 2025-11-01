// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const app = express();

// ALLOWED ORIGINS (LOCAL + LIVE)
const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://localhost:5500",
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("CORS Block:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// LOG REQUESTS
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// NODEMAILER SETUP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// VERIFY MAILER
transporter.verify((err) => {
  if (err) console.error("Mail Error:", err.message);
  else console.log("Mailer Ready");
});

// HOME
app.get("/", (req, res) => {
  res.send(`
    <h2 style="color:green">Afnuz Backend Live!</h2>
    <p>Port: ${process.env.PORT || 5000}</p>
    <p><a href="/test-email">Test Email</a> | <a href="/health">Health</a></p>
  `);
});

// SEND INQUIRY EMAIL
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ 
        ok: false, 
        msg: "Name, email, and phone are required" 
      });
    }

    await transporter.sendMail({
      from: `"Afnuz Academy" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <h3>New Student Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || "No message"}</p>
        <hr>
        <small>Sent from Afnuz Academy Website</small>
      `
    });

    res.json({ ok: true, msg: "Inquiry sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ ok: false, msg: "Failed to send", error: err.message });
  }
});

// TEST EMAIL
app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Backend Test Email",
      text: "Backend is working perfectly!"
    });
    res.send("<h3 style='color:green'>Test Email Sent! Check inbox.</h3>");
  } catch (err) {
    res.status(500).send(`<h3 style='color:red'>Failed: ${err.message}</h3>`);
  }
});

// HEALTH CHECK
app.get("/health", (req, res) => {
  res.json({ ok: true, status: "healthy", timestamp: new Date().toISOString() });
});

// 404
app.use((req, res) => {
  res.status(404).json({ ok: false, msg: "Endpoint not found" });
});

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\nServer running: http://localhost:${PORT}`);
  console.log(`Test Email: http://localhost:${PORT}/test-email`);
  console.log(`Health: http://localhost:${PORT}/health`);
});