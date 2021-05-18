const { Pool } = require("pg");
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const db =
  process.env.NODE_ENV === "test" ? "movieplaza_test" : "dboqj906ps4mnl";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
pool.connect();

module.exports = pool;
