const { Pool } = require('pg')
const pool = new Pool({
    host: "192.168.1.66",
    user: "postgres",
    password: "miclavesecreta",
    database: "likeme",
    allowExitOnIdle: true
})

const obtenerPost = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    return rows
}

const agregarPost = async (value) => {
    const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, DEFAULT)"
    const values = [value.titulo, value.url, value.descripcion]
    const result = await pool.query(query, values)
    console.log("Post agregado!", result)
}

module.exports = { agregarPost, obtenerPost }
