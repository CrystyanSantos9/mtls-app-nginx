const fs = require('fs');
const https = require('https');
const axios = require('axios');

const httpsAgent = new https.Agent({
    cert: fs.readFileSync('ssl/client.crt'),
    key: fs.readFileSync('ssl/client.key'),
    ca: fs.readFileSync('ssl/ca.crt'),
  });

(async function(){  
    // ...
try{
    const result = await axios.get('https://api2.local.com', { httpsAgent });
    console.log(result)
}catch(err){
    console.log(err.message)
}
})()