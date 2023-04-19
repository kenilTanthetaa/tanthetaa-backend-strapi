module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  "reading-time": {
    enabled: true,
    config: {
      contentTypes: {
        blog: {
          field: "readingTime",
          references: "content",
        },
      },
    },
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
});
