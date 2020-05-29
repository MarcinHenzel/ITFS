require('./data');
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 3000;

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

/* app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
}); */
app.use(express.json());

app.post('/sendMessage', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
})
app.post('/sendFireAlarm', (req, res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'fire'});
})

app.post('/addWindows', (req,res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
});
app.post('/addDeleg', (req,res) => {
  res.status(200).send({message: 'dsa'});
});
app.post('/addOffice', (req,res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
});
app.post('/addMileage', (req,res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
});
app.post('/addVehicle', (req,res) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
});


app.get('/getCosts', (req, res) => {
  res.status(200).send(costs);
});
app.get('/getRegs', (req, res) => {
  res.status(200).send(regs);
});
app.get('/getOffices', (req, res) => {
  res.status(200).send(offices);
});
app.get('/getWindows', (req, res) => {
  res.status(200).send(windowses);
});
app.get('/search-delegation', (req, res) => {
  console.log(req.query);
  res.status(200).send([...ans, ...ans]);
});
app.get('/search-windows', (req, res) => {
  console.log(req.query);
  res.status(200).send([...windows, ...windows]);
});
app.get('/search-office', (req, res) => {
  console.log(req.query);
  res.status(200).send([...office, ...office]);
});
app.get('/search-vehicle', (req, res) => {
  console.log(req.query);
  res.status(200).send([...vehicle, ...vehicle]);
});

app.listen(PORT, () => {
  console.log(`server running on dsaport ${PORT}`);
});
