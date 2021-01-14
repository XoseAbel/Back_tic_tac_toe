import express from 'express';
import initPlay from './index.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import 'core-js/stable';
import 'regenerator-runtime/runtime';
const PORT = process.env.PORT;

const app = express();
// Configuración de express
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//confg adicional, para evitar problemas de cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
  app.options('*', (req, res) => {
    // allowed XHR methods
    res.header(
      'Access-Control-Allow-Methods',
      'GET, PATCH, PUT, POST, DELETE, OPTIONS'
    );
    res.send();
  });
});

// cambiar por el init de la nueva ruta
app.get('/test', (req, res) => res.send("I'm alive"));

initPlay(app);

app.listen(PORT, () => {
  console.log('App listening on port: ' + PORT);
});
