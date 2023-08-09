require('dotenv').config();
const express = require('express');
const app = express()
const cors = require('cors');

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

const fontRouter = require('./routes/fontRoutes');
app.use('/api', fontRouter);

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
