'use server'
import { pool } from '@/lib/postgres'


export async function getArticulos() {
  // Simulamos retardo de tiempo
  await new Promise(resolve => setTimeout(resolve, 1000))

  try {
    const results = await pool.query('select * from articulos');
    return results.rows;
  } catch (error) {
    console.log(error);
    return null;
  }
}


export async function getArticulo(id) {
  // Simulamos retardo de tiempo
  await new Promise(resolve => setTimeout(resolve, 1000))

  try {
    const results = await pool.query('select * from articulos where id=$1', [id]);
    return results.rows[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}