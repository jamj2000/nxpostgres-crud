import pg from 'pg'
import config from '../database/config.mjs'

const { Pool } = pg

export const pool = new Pool(config)



/*

// OTRA FORMA DE CREAR EL POOL
import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

// NECESITAMOS EDITAR EL ARCHIVO .env
// DATABASE_URL="postgres://usuario:contraseña@host:5432/basedatos?sslmode=require"

*/