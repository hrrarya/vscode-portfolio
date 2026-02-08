const withPWA = require("next-pwa");

// module.exports = withPWA({
//   turbopack:{},
//   reactStrictMode: true,
//   images: {
//     domains: ["images.pexels.com"],
//   },
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     sw: "/sw.js",
//   },
// });

module.exports = {
  turbopack: {},
  output: 'export',
  images: {
    domains: ["images.pexels.com"],
    unoptimized:true
  },
}