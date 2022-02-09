const express = require('express')
const app = express()
const path = require('path')

app.use(require('cors')())

app.get('/api/seller', (req, res) => { 
  res.sendFile(path.join(__dirname, '/public/data/seller.json')); 
}); 

app.listen(8888)
