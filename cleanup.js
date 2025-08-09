// cleanup.js
// Clean temporary files or cache

const fs = require("fs");
const path = require("path");

const tempDir = path.join(__dirname, "temp");

function cleanup() {
  if (!fs.existsSync(tempDir)) {
    console.log("No temp directory to clean.");
    return;
  }

  fs.readdirSync(tempDir).forEach((file) => {
    const filePath = path.join(tempDir, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  });

  console.log("Cleanup completed.");
}

cleanup();
