// // //HTTP
// // // 'use strict';

const express = require('express');
const cors = require('cors')


const PORT = process.env.PORT || 8080;
const HOST = process.env.NODE_NAME || '0.0.0.0';



const app = express();

// app.use(cors({
//   origin: "*",
// }))

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// //cors
// app.use(
//   cors({
//     origin: "*",
//   })
// )



// rotas 

app.get('/', (req, res) => {
    const headers = req.headers
    console.log("Headers from client >>> ", headers)
    
    res.statusCode = 200;
    res.send(headers);
  
//setTimeout(()=>

    // res.send(headers), 15*1000)
    // res.destroy(), 9*1000)
});

//options por operação 

app.options('/user', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:5501")
  res.setHeader("Access-Control-Allow-Headers", "content-type")
  res.setHeader("Access-Control-Allow-Methods","GET, OPTIONS, PUT, PATCH, DELETE")
 
  res.status(204).send()
});

// corsOptions = {
  
//     "origin": "*",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false,
//     "optionsSuccessStatus": 204
  
// }
// // app.options('/user', cors(corsOptions))

app.put('/user', (req, res) => {
  const { user } = req.body
  const headers = req.headers
  const newBody = {
    user: user,
    headers: headers
  }
  res.setHeader("Access-Control-Allow-Origin","*")

  res.statusCode = 201
  res.send(newBody);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
