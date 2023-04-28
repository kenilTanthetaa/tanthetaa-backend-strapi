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
      formLimit: "256000mb", // form body
      jsonLimit: "256000mb", // JSON body
      textLimit: "256000mb", // text body
      formidable: {
        maxFileSize: 256 * 1024 * 1024 * 1024, // uploaded file size
      },
    },
  },
];
