const express = require('express');
const cors = require('cors');
const app = express();

// Operaciónes postgres
const { obtenerPost, agregarPost } = require("./query-pg.js")

// Middlewares

// Habilitar cors
app.use(cors());
// Procesar json
app.use(express.json())

// Asigna puerto servidor WEB
const PORT = process.env.PORT || 3000

// Agregar nuevo registro
app.post('/posts', (req, res) => {
    agregarPost(req.body);
    res.status(201).send("Registro agregado!");
})

// Obtener todas los registros
app.get('/posts', async (req, res) => {
    res.status(200).json(await obtenerPost());
})

app.listen(PORT, console.log(`Server on port: ${PORT}`))