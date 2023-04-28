module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  // "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // form body
      jsonLimit: "256mb", // JSON body
      textLimit: "256mb", // text body
      formidable: {
        maxFileSize: 256 * 1024 * 1024, // uploaded file size
      },
    },
  },
];
