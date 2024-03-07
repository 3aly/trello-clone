const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@screens": path.resolve(__dirname, "src/screens"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@fakers": path.resolve(__dirname, "src/fakers"),
      "@modals": path.resolve(__dirname, "src/modals"),
      "@types": path.resolve(__dirname, "src/types"),
      // Add other aliases as needed
    },
  },
};
