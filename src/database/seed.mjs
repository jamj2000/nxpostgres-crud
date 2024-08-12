import pg from 'pg'
import config from './config.mjs'

const { Client } = pg
const client = new Client(config)


/*

// OTRA FORMA DE CREAR EL CLIENTE
import pg from 'pg'
const { Client } = pg

const client = new Client({
  connectionString: process.env.DATABASE_URL
})

// NECESITAMOS EDITAR EL ARCHIVO .env
// DATABASE_URL="postgres://usuario:contraseña@host:5432/basedatos?sslmode=require"

*/


const load = async () => {
    try {
        await client.connect()

        let result = await client.query(`
        CREATE TABLE IF NOT EXISTS articulos (
            id SERIAL PRIMARY KEY,
            nombre TEXT NOT NULL,
            descripcion TEXT,
            precio DECIMAL(10,2)
            );
        `)
        console.log("Creada tabla artículos");

        result = await client.query(`
        INSERT INTO articulos (nombre, descripcion, precio)
        VALUES 
           ('PC', 'Ordenador de sobremesa', 999.99),
           ('Impresora', 'Impresora Epson', 55.99),
           ('Teclado', 'Teclado USB', 19.91);
        `)
        console.log("Insertados varios artículos");

    } catch (error) {
        console.log(error);
    } finally {
        await client.end()
    }
}

load();


