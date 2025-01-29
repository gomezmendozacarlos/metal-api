const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor(){
    this.bands = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.bands.push({
        id: faker.string.uuid(),
        name: faker.music.artist(),
        genre: faker.music.genre(),
        image: faker.image.url(),
      });
    }
  }

  async create(data) {
    const newBand = {
      id: faker.string.uuid(),
      ...data
    }
    this.bands.push(newBand);
    return newBand;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.bands);
      });
    })
  }

  async findOne(id) {
    return this.bands.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.bands.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Banda no encontrada');
    }
    const product = this.bands[index];
    this.bands[index] = {
      ...product,
      ...changes
    };
    return this.bands[index];
  }

  async delete(id) {
    const index = this.bands.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Banda no encontrada');
    }
    this.bands.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
