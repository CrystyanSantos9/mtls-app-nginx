// // //HTTP
// // // 'use strict';

const express = require('express');


const PORT = process.env.PORT || 8080;
const HOST = process.env.NODE_NAME || '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    const headers = req.headers
  res.send(headers);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// -----------------------------------------------------------------

// //HTTPS
// const express = require('express');
// const https = require('https');
// const fs = require('fs')

// const port = 8080;
// const HOST = '0.0.0.0';

// É preciso mapear essas pastas para o docker-compose
// const options = {
//     key: fs.readFileSync('./ssl/server.key'),
//     cert: fs.readFileSync('./ssl/server.crt')
//   };

// // const options = {}

// const app = express();

// app.get('/', (req, res) => {
//     res.status(200)
//         .json(`Hello ${req.header("ssl_client")}, your certificate was issued by ${req.header("SSL_Client_Issuer")}!`);
// });

// https.createServer(options, app).listen(port, () => {
//     console.log(`.. server up and running and listening on ${port} ..`);
// });