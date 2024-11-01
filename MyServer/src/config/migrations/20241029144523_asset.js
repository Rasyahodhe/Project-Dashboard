/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("asset", (table) => {
      table.increments("asset_id");
      table.string("name").notNullable();
      table.string("typeasset").unique().notNullable();
    })
    .createTable("user", (table) => {
      table.increments("user_id");
      table.string("name").notNullable();
      table.string("email").unique().notNullable();
      table.string("phone", [16]).unique().notNullable();
      table.string("username").notNullable();
      table.string("password").notNullable();
      table.string("confirm_password").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user").dropTable("asset");
};
