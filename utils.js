// utils.js
// Common utility functions

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function log(message) {
  console.log(`[LOG ${formatDate(new Date())}] ${message}`);
}

module.exports = {
  formatDate,
  log,
};
