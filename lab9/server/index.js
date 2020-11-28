var express = require('express')
var bodyParser = require('body-parser')
const cors = require("cors")
const mongoose = require("mongoose");
const Temperature = require("./models/temperature");

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

async function start() {
  try{
      await mongoose.connect("mongodb+srv://alex:ZAKHAROV@cluster0.sn82n.mongodb.net/temperature?retryWrites=true&w=majority", {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
      });
      app.listen(port, hostname, ()=>{
          console.log(`Server running at http://${hostname}:${port}/`);

      })
  } catch(e){
      console.log(e);

  }
}


async function addTemp(region, midtemp, downfall, date){
  const temp = new Temperature({
    region,
    midtemp,
    downfall,
    date
  });
  await temp.save();
}

start();
// addTemp();

app.post('/create', async (req, res) => {
  await addTemp(req.body.region, req.body.midtemp, req.body.downfall, req.body.date)
  return res.send(req.body)
})

app.get('/getall', async (req, res) => {
  const temps = await Temperature.find({}).lean()
  return res.send(temps)
})

app.post('/tempdel', async (req, res) => {
  console.log(req.body);
  const temps = await Temperature.findByIdAndRemove(req.body.id);
  const tempsReq = await Temperature.find({}).lean();
  return res.send(tempsReq);
})

app.get('/mintemp', async (req, res) => {
  console.log(req.body);
  const temps = await Temperature.find({}).sort({
    midtemp: 1
  }).limit(1)
  console.log(temps)
  return res.send(temps)
})

app.post('/gettemp', async (req, res) => {
  console.log(req.body);
  const temps = await Temperature.find({
    date: req.body.date
  }).sort({
    midtemp: 1
  }).limit(1)
  console.log(temps);
  return res.send(temps);
})