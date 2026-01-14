export default [
  "strapi::errors",

  {
    name: "strapi::cors",
    config: {
      enabled: false,
    },
  },

  "strapi::security",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
