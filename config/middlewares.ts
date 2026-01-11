// config/middlewares.ts
export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: (ctx) => {
        const allowed = [
          "https://omnicanal-dz.netlify.app",
          "https://omnicanal-dz.com",
        ];
        const requestOrigin = ctx.get("origin");
        return allowed.includes(requestOrigin) ? requestOrigin : false;
      },
      headers: ["*"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      credentials: true,
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
