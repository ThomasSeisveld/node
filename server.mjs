import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import addNumbers from 'package_089560'; // Jouw aangemaakte npm-package


const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true })); // Middleware om formuliergegevens te verwerken

// Route voor de homepagina
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

// Route voor het toevoegen van twee getallen
app.post('/add', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  const result = addNumbers(num1, num2); // Gebruik de addNumbers-functie uit jouw package
  res.send(`Het resultaat van ${num1} + ${num2} is ${result}`);
});

// Serveer statische bestanden vanuit de 'public' map
app.use(express.static('public'));

// Configureer de server om te luisteren op poort 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
