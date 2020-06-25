const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const moviesRouter = require('./routes/movies');
const movieRouter = require('./routes/movie');

app.use('/api/movies', moviesRouter);
app.use('/api/movie', movieRouter);

//conect the front-end
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

//listen to the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(process.env.APP_KEY);

  console.log('the port is work on port ' + PORT);
});
