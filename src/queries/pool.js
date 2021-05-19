const { Pool } = require("pg");
//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
console.log(process.env.DATABASE_URL);
const db =
  process.env.NODE_ENV === "test" ? "movieplaza_test" : "dboqj906ps4mnl";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});
pool.connect();

module.exports = pool;
