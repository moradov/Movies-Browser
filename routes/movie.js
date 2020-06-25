const express = require('express');
const axios = require('axios');
const router = express.Router();

const APP_KEY = process.env.APP_KEY;

router.get('/details/:id', async (req, res) => {
  const movieId = req.params.id;
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${APP_KEY}&language=en-US `
    );
    const data = await resp.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

// get movie cast
router.get('/cast/:id', async (req, res) => {
  const movieId = req.params.id;
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APP_KEY} `
    );
    const data = await resp.data;
    res.status(202).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
