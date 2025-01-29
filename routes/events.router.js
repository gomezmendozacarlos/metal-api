const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    bands: [],
    cost: {
      dia: "200",
      pre: "150",
      vip: "250"
    },
    date: "2023-01-01",
    flyer: "",
    time: "20:00",
    venue: {
      address: "Epigmenio Gonz lez 66, Centro, 44100 Guadalajara, Jal.",
      capacity: 2000,
      city: "Guadalajara",
      name: "Foro Independencia",
      state: "Jalisco"
    },
    id: 1
  });
})


module.exports = router;
