const pool = require('../libs/postgres.pool');

class ProductsService {

  constructor(){
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
      process.exit(-1);
    })
  }

  async create(data) {
    const { name, location, genre } = data;
    const query = `
      INSERT INTO bands (name, location, genre)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, location, genre];
    const { rows } = await this.pool.query(query, values);
    return rows[0];
  }

  async find() {
    const query = 'SELECT * FROM bands';
    const { rows } = await this.pool.query(query);

    return rows
  }

  async findOne(id) {
    const query = `SELECT * FROM bands WHERE id = ${id}`;
    const { rows } = await this.pool.query(query);
    return rows;
  }

    async update(id, changes) {
      const { name, genre, location } = changes;
      const query = `
        UPDATE bands
        SET name = $1, genre = $2, location = $3
        WHERE id = $4
        RETURNING *;
      `;
      const values = [name, genre, location, id];
      const { rows } = await this.pool.query(query, values);
      if (rows.length === 0) {
        throw new Error('Banda no encontrada');
      }
      return rows[0];
    }

  async delete(id) {
    const query = `
      DELETE FROM bands
      WHERE id = $1
      RETURNING *;
    `;
    const values = [id];
    const { rows } = await this.pool.query(query, values);
    if (rows.length === 0) {
      throw new Error('Banda no encontrada');
    }
    return rows[0];
  }
}


module.exports = ProductsService;
