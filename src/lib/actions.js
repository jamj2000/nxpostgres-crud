'use server'
import { pool } from '@/lib/postgres'
import { redirect } from 'next/navigation';


export async function getArticulos() {

  try {
    const results = await pool.query('select * from articulos');
    return results.rows;
  } catch (error) {
    // console.log(error);  
    return null;    
  }
}

export async function newArticulo(formData) {
  try {
    const nombre = formData.get('nombre');
    const descripcion = formData.get('descripcion');
    const precio = formData.get('precio');

    const query = 'insert into articulos(nombre,descripcion,precio) values ($1, $2, $3)';
    const results = await pool.query(query, [nombre, descripcion, precio]);
    // console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}


export async function editArticulo(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')

  try {
    const query = 'update articulos set nombre=$1, descripcion=$2, precio=$3 where id=$4 ';
    const results = await pool.query(query, [nombre, descripcion, precio, id]);
    // console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function deleteArticulo(formData) {
  try {
    const id = formData.get('id');

    const query = 'delete from articulos where id=$1';
    const results = await pool.query(query, [id]);
    // console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}
