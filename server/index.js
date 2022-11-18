const express = require('express');
const path = require('path');
const users = require("./routes/users");
const test = require("./routes/test");
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.use('/api/users', users);

app.use('/api/test', test);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 1234;
app.listen(port);

console.log('App is listening on port ' + port);