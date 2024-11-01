// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "laode", // pastikan ini adalah pengguna dengan hak akses
      password: "123456",
      database: "tambang",
    },
  },
};
