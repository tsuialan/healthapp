// I BASICALLY COPIED STARTER CODE IDK WHAT IT DO
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment
// https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from App Engine!');
});

// Listen to the App Engine-specified port, or 5000 otherwise
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});