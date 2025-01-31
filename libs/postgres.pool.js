const { Pool } = require('pg');


  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'itos',
    password: '1q2w3e4r',
    database: 'metal-api-db'
  });

  pool.connect();



module.exports = pool

