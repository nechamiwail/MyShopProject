const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware to parse JSON in requests
app.use(bodyParser.json());

// Example route to handle form data
app.post('/submitForm', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);

  // Perform any processing on the data if needed

  // Send a response back to the client
  res.json({ message: 'Form data received successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
