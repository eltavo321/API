const express = require('express');
const app = express();

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// Ejemplo de endpoint
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde la API' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});