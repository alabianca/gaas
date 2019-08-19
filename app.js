const http = require('http');
const express = require('express');

const fs = require('fs');
const names = [
    "Matt",
    "Manasa",
    "Enja",
    "Chris K",
    "Chris M",
    "Alex",
]

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/public'))



// const server = http.createServer((req, res) => {
//     fs.readFile("index.html", (error, data) => {
//         let html = data.toString();
//         const index = getRandomInt(names.length);
//         html = html.replace("{{name}}", names[index]);
//         res.setHeader("Content-Type", "text/html");
//         res.write(html);
//         res.end()
//     })
// });

// const getRandomInt = (max) => {
//     return Math.floor(Math.random() * Math.floor(max))
// }


app.listen(port, () => {
    console.log("listening on port:" + port)
})