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
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 1000,
      amountLimit: 10000,
      apolloServer: {
        tracing: false,
      },
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
