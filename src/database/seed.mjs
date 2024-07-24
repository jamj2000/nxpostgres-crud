import pg from 'pg'
import config from './config.mjs'

const { Client } = pg
const client = new Client(config)



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


