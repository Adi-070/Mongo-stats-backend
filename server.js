const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Data = require('./models/Data');
const app = express();
const port = 3001;

const uri = "mongodb+srv://mishraaditya760:RJSMwAowfZSwY7D0@cluster0.jakbfab.mongodb.net/<DATABASE>?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
  })

app.get('/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from MongoDB');
    }
});

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
module.exports=app;