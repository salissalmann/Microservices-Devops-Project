'use strict';

const express = require('express');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const axios = require('axios');
require('dotenv').config();

// App
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Adjust the path to your HTML file
});

app.get('/hello', (req, res) => {
  res.send('Hello world\n');
});

// Define your API endpoints and routes here
app.get('/api/doctors', async (req, res) => {
  let url  = process.env.DOCTORS_SERVICE_URL;
  console.log(url);
  try {
    const response = await axios.get(String(`http://${url}/doctors`));
    const doctors = response.data;
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch doctors' });
  }
});

app.get('/api/appointments', async (req, res) => {
  let url  = process.env.APPOINTMENTS_SERVICE_URL;
  console.log(url);
  try {
    const response = await axios.get(String(`http://${url}/appointments`));
    const appointments = response.data;
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch appointments' });
  }
});

app.get('/doctors/health', async (req, res) => {
  let url  = process.env.DOCTORS_SERVICE_URL;
  console.log(url);
  try {
    const response = await axios.get(String(`http://${url}/health`));
    const doctors = response.data;
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch doctors' });
  }
})



app.listen(PORT, HOST); 
console.log(`Running on http://${HOST}:${PORT}`);