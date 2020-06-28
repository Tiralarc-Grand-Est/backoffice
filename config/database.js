module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'crta-strapi'),
        username: env('DATABASE_USERNAME', 'crta-strapi'),
        password: env('DATABASE_PASSWORD', 'crta-strapipw'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
