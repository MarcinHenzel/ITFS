import * as functions from 'firebase-functions';
import {ans, windows, office, vehicle, costs, regs, offices, windowses} from './data';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((req: any,est, res: any)onse) => {
//  res: any)onse.send("Hello from Firebase!");
// });
const express = require("express");
/* const cors = require('cors'); */
const admin = require('firebase-admin');
const app = express();
/* const main = express(); */
/* const PORT = 3000; */
admin.initializeApp(functions.config().firebase);

/*  var corsOptions = {
   origin: true
}
app.use(cors(corsOptions)); */
/* main.use('/Myapi', app); */
app.use(express.json());

app.post('/api/sendMessage', (req: any, res: any) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
})
app.post('/api/sendFireAlarm', (req: any, res: any) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'fire'});
})

app.post('/api/addWindows', (req: any, res: any) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
});
app.post('/api/addDeleg', (req: any, res: any) => {
  res.status(200).send({message: 'dsa'});
});
app.post('/api/addOffice', (req: any, res: any) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
});
app.post('/api/addMileage', (req: any, res: any) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
});
app.post('/api/addVehicle', (req: any, res: any) => {
  console.log(req.query);
  console.log(req.body);
  res.status(200).send({message: 'dsa'});
});


app.get('/api/getCosts', (req: any, res: any) => {
  res.status(200).send(costs);
});
app.get('/api/getRegs', (req: any, res: any) => {
  res.status(200).send(regs);
});
app.get('/api/getOffices', (req: any, res: any) => {
  res.status(200).send(offices);
});
app.get('/api/getWindows', (req: any, res: any) => {
  res.status(200).send(windowses);
});
app.get('/api/search-delegation', (req: any, res: any) => {
  console.log(req.query);
  res.status(200).send([...ans, ...ans]);
});
app.get('/api/search-windows', (req: any, res: any) => {
  console.log(req.query);
  res.status(200).send([...windows, ...windows]);
});
app.get('/api/search-office', (req: any, res: any) => {
  console.log(req.query);
  res.status(200).send([...office, ...office]);
});
app.get('/api/search-vehicle', (req: any, res: any) => {
  console.log(req.query);
  res.status(200).send([...vehicle, ...vehicle]);
});

/* app.listen(PORT, () => {
  console.log(`server running on dsaport ${PORT}`);
});
 */
export const webApi = functions.https.onRequest(app);
