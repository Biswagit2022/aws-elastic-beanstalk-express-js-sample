const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I am Biswajit Prusty from Odisha.Now i am living in Hyderabad and createed some new friends Dileep,kalki and Chakri !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
