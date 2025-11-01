// ✅ Start Server (Production Safe)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on port ${PORT}`);
  console.log(`🔗 Test Email: /test-email`);
  console.log(`💚 Health: /health`);
});
