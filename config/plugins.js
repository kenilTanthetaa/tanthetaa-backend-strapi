module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        blog: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 10,
    },
  },
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 256 * 1024 * 1024, // 256 MB
        localServer: {},
      },
    },
  },
});
