const express = require('express')
const { type } = require('os')
const cors = require("cors")
const bodyParser = require("body-parser")
const fs = require('fs');

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000
const app = express()
app.use(cors())
app.use(bodyParser.json({ extended: true }))


app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/form', (req, res)=>{
  let data = req.body
  console.log(data)
  let obj1 = {
    arr: data.arr
  }
  let obj2 = {
    arr: data.arrSort
  }
  console.log(obj1);
  let objNoSort = JSON.stringify(obj1)
  let objSort = JSON.stringify(obj2)
  fs.writeFileSync('./resource/nosort.json', objNoSort)
  fs.writeFileSync('./resource/sort.json', objSort)

  return res.send(objSort)
}) 

app.post('/form2', (req, res)=>{
  let data = req.body
  console.log(data)
  let obj1 = {
    arr: data.arr
  }
  let obj2 = {
    arr: data.arrSort
  }
  console.log(obj1);
  let objNoSort = JSON.stringify(obj1)
  let objSort = JSON.stringify(obj2)
  fs.writeFileSync('./resource/nosort.json', objNoSort)
  fs.writeFileSync('./resource/sort.json', objSort)

  return res.send(objSort)
}) 