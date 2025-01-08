const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    name: "Foro Independencia",
    capacity: 2000,
    city: "Guadalajara",
    state: "Jalisco",
    address: "Epigmenio González 66, Centro, 44100 Guadalajara, Jal."
  });
})


module.exports = router;
