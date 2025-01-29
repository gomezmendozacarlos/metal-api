const express = require('express');
const EventsService = require('../services/events.service');

const router = express.Router();
const service = new EventsService();

  router.get('/', async (req, res) => {
    const event = await service.find();
    res.json(event);
  });

  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const event = await service.findOne(id);
    res.json(event);
  });

  router.post('/', async (req, res) => {
    const body = req.body;
    const newEvent = await service.create(body);
    res.status(201).json(newEvent);
  });

  router.patch('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  });

  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json(rta);
  });


module.exports = router;
