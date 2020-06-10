"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webApi = void 0;
const functions = require("firebase-functions");
const data_1 = require("./data");
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
app.post('/api/sendMessage', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(200).send({ message: 'dsa' });
});
app.post('/api/sendFireAlarm', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(200).send({ message: 'fire' });
});
app.post('/api/addWindows', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(200).send({ message: 'dsa' });
});
app.post('/api/addDeleg', (req, res) => {
    res.status(200).send({ message: 'dsa' });
});
app.post('/api/addOffice', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(200).send({ message: 'dsa' });
});
app.post('/api/addMileage', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(200).send({ message: 'dsa' });
});
app.post('/api/addVehicle', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(200).send({ message: 'dsa' });
});
app.get('/api/getCosts', (req, res) => {
    res.status(200).send(data_1.costs);
});
app.get('/api/getRegs', (req, res) => {
    res.status(200).send(data_1.regs);
});
app.get('/api/getOffices', (req, res) => {
    res.status(200).send(data_1.offices);
});
app.get('/api/getWindows', (req, res) => {
    res.status(200).send(data_1.windowses);
});
app.get('/api/search-delegation', (req, res) => {
    console.log(req.query);
    res.status(200).send([...data_1.ans, ...data_1.ans]);
});
app.get('/api/search-windows', (req, res) => {
    console.log(req.query);
    res.status(200).send([...data_1.windows, ...data_1.windows]);
});
app.get('/api/search-office', (req, res) => {
    console.log(req.query);
    res.status(200).send([...data_1.office, ...data_1.office]);
});
app.get('/api/search-vehicle', (req, res) => {
    console.log(req.query);
    res.status(200).send([...data_1.vehicle, ...data_1.vehicle]);
});
/* app.listen(PORT, () => {
  console.log(`server running on dsaport ${PORT}`);
});
 */
exports.webApi = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map