const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./modelo/conexion');
const ruta = require('./controlador/controlador');


/*const url = 'http://127.0.0.1:5173';*/
const url = 'https://natucolombia.netlify.app';

  app.use(cors({
    origin: url
  }));
  
  app.use(express.json());
  app.use('/api/', ruta);
  

  const PORT = process.env.PORT|| 5000;


  app.get('/', (req, res) => {
    res.send('Hola, mundo!');
  });

  app.listen(PORT, ()=>{
   console.log(`Servidor Iniciado en el puerto ${PORT}`);
  });