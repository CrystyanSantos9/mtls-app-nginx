const fs = require('fs');
const https = require('https');
const axios = require('axios');
const express = require('express')

const net = require('node:net')

const port = 3005;
const host = '0.0.0.0';


const options = {};

const app = express();

// ...
const httpsAgent = new https.Agent({
  cert: fs.readFileSync('ssl/client.crt'),
  key: fs.readFileSync('ssl/client.key'),
  ca: fs.readFileSync('ssl/ca.crt'),
});



app.get('/node1', async (req, res, next) => {
    try{
        const result = await axios.get('https://api.local.com', { httpsAgent });
        const remoteAddress = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
        console.log(req.headers, remoteAddress)
        res.status(200).json(result.data)
    }catch(err){
        next(err)
    }
});

app.get('/node2', async (req, res, next) => {
    try{
        const result = await axios.get('https://api2.local.com', { httpsAgent });
        const remoteAddress = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
        console.log(req.headers, remoteAddress)
        res.status(200).json(result.data)
    }catch(err){
        next(err)
    }
});

app.use((error,req,res,next)=>{
    console.log('error middleware')
    console.log(error)
    res.sendStatus(500)
})

app.listen(port, () => {
    console.log(`.. server up and running and listening on ${port} ..`);
});