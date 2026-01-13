export default ({ env }) => ({
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  url: "https://api-omni.codeandsens.com",
  proxy: true,
});
