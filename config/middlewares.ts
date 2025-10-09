// config/middlewares.ts
export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: "*", // allow everything
      headers: ["*"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      credentials: false, // <- must be false when origin is "*"
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
