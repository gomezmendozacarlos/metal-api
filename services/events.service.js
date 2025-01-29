const { faker } = require('@faker-js/faker');

class ProductsService {

  constructor(){
    this.events = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.events.push({
        id: faker.string.uuid(),
        bands: [faker.music.artist(), faker.music.artist()],
        date: faker.date.future(),
        venue: {
          address: faker.location.streetAddress(),
          capacity: faker.number.int({ min: 10, max: 100 }),
          city: faker.location.city(),
          name: faker.company.name(),
          state: faker.location.state(),
        },
        flyer: faker.image.url(),
      });
    }
  }

  async create(data) {
    const newEvent = {
      id: faker.string.uuid(),
      ...data
    }
    this.events.push(newEvent);
    return newEvent;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.events);
      });
    })
  }

  async findOne(id) {
    return this.events.find(item => item.id === id);
  }

  async update(id, changes) {
    const index = this.events.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Evento no encontrado');
    }
    const evento = this.events[index];
    this.events[index] = {
      ...evento,
      ...changes
    };
    return this.events[index];
  }

  async delete(id) {
    const index = this.events.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Evento no encontrado');
    }
    this.events.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
