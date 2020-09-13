const express = require('express')
const app = express()
const port = 3001;
const axios = require('axios');
var time = (Math.floor(Math.random()*(10-1))+1)*1000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log('Intervalo: ' + time);

setInterval(function(){
  axios.get('http://localhost:3000').then(res => {
  	console.log(res.data);
  });
}, time);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
