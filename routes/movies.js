const express = require('express');
const axios = require('axios');
const router = express.Router();

const APP_KEY = process.env.APP_KEY;
//get movies by categories type
router.get('/genres', async (req, res) => {
  console.log(process.env.APP_KEY);

  let { serach_by, page } = req.query;
  if (!serach_by.length > 0) {
    serach_by = 'popular';
  }
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${serach_by}/?api_key=${APP_KEY}&language=en-US&page=${page}`
    );
    const data = await resp.data;
    res.status(202).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});

//get movies by search keyword
router.get('/', async (req, res) => {
  const { key_word, page } = req.query;
  if (!key_word.length > 0) {
    return res.status(404).json('search key word not defind');
  }
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&language=en-US&query=${key_word}&page=${typeof page ===
        'number' || 1}&include_adult=false`
    );
    const data = await resp.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
});
module.exports = router;
