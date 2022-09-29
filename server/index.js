const express = require('express');
const app = express();
const anime = require('./src/anime');
const helmet = require('helmet');
const cors = require('cors');

// Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

// Routes

app.use('/v1/anime', anime);

// listen

app.listen(4000, () => {
    console.log(`App listening on port 4000!`);
});