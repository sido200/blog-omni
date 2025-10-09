export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: [
        "http://82.29.169.69:1337", // your API (optional)
        "http://82.29.169.69", // if you access frontend by IP
        "http://localhost:5173", // if you test locally with Vite
        "https://your-frontend-domain.com", // replace with your frontend URL
        "https://commented-contribution-discharge-colleague.trycloudflare.com",
      ],
      headers: "*",
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
