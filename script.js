// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiry-form");

  if (!form) {
    console.warn("Inquiry form not found on this page.");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const whatsappInput = form.querySelector('input[name="whatsapp"]');
    const messageTextarea = form.querySelector('textarea[name="message"]');

    const name = nameInput?.value.trim() || "";
    const email = emailInput?.value.trim() || "";
    const whatsapp = whatsappInput?.value.trim() || "";
    const message = messageTextarea?.value.trim() || "";

    // ✅ Basic validation
    if (!name) {
      alert("Please enter your name.");
      nameInput?.focus();
      return;
    }

    if (!email) {
      alert("Please enter your email.");
      emailInput?.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      emailInput?.focus();
      return;
    }

    if (whatsapp && !/^\d{10}$/.test(whatsapp.replace(/[\s\-\(\)]/g, ""))) {
      alert("Please enter a valid 10-digit WhatsApp number.");
      whatsappInput?.focus();
      return;
    }

    // ✅ Prepare data
    const payload = {
      name,
      email,
      whatsapp: whatsapp || "Not provided",
      message: message || `Inquiry from ${name} (WhatsApp: ${whatsapp || "N/A"})`,
    };

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      // ✅ Correct backend endpoint
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.msg || "✅ Thank you! Your inquiry has been sent successfully.");
        form.reset();
      } else {
        alert(data.msg || "❌ Failed to send. Please try again later.");
        console.error("Server error:", data);
      }
    } catch (err) {
      console.error("Network/Fetch error:", err);
      alert("⚠️ Could not connect to server. Please check your internet or try again later.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText || "Submit Inquiry";
      }
    }
  });
});
