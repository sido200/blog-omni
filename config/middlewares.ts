export default [
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["https://omnicanal-dz.com", "https://www.omnicanal-dz.com"],
      headers: ["Content-Type", "Authorization", "Origin", "Accept"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      credentials: true,
    },
  },
  "strapi::security",
  "strapi::body",
  "strapi::query",
  "strapi::session",
];
