const express = require('express'); 
require('dotenv').config();
const bodyParser = require('body-parser');
const emailRoutes = require('../routes/emailRoutes');
const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Bienvenue sur votre serveur JCS Group!");
  });
app.use('/send-email', emailRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
