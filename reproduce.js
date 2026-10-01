// Template reproduksi bug JS - Mrkus-Dev
// Usage: node reproduce.js
console.log("Reproducing bug...");

try {
  // Tulis kode pemicu bug dari issue di sini
  // const result = buggyFunction();
  console.log("Bug NOT reproduced - cek issue lagi");
} catch (e) {
  console.error("Bug reproduced:", e.message);
}
