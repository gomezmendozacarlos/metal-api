const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'itos',
    password: '1q2w3e4r',
    database: 'metal-api-db'
  });

  await client.connect();

  return client;
}

module.exports = getConnection

