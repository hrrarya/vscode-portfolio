const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    sw: "/sw.js",
  },
});
