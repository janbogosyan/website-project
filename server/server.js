// const express = require('express');
// const app = express();

// app.get('/api', (req, res) => {
//     res.json({ 'users': ['userOne', 'userTwo', 'userThree'] })
// });

// app.listen(3000, () => { console.log("Server started on port 3000") });


const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(3000);