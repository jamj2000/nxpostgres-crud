'use server'
import { pool } from '@/lib/postgres'
import { revalidatePath } from 'next/cache';


export async function newArticulo(prevState, formData) {
  try {
    const nombre = formData.get('nombre');
    const descripcion = formData.get('descripcion');
    const precio = formData.get('precio');

    const query = 'insert into articulos(nombre,descripcion,precio) values ($1, $2, $3)';
    const results = await pool.query(query, [nombre, descripcion, precio]);
    // console.log(results);
    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }

  } catch (error) {
    console.log(error);
  }

}


export async function editArticulo(prevState, formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')

  try {
    const query = 'update articulos set nombre=$1, descripcion=$2, precio=$3 where id=$4 ';
    const results = await pool.query(query, [nombre, descripcion, precio, id]);
    // console.log(results);
    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }

  } catch (error) {
    console.log(error);
  }

}

export async function deleteArticulo(prevState, formData) {
  try {
    const id = formData.get('id');

    const query = 'delete from articulos where id=$1';
    const results = await pool.query(query, [id]);
    // console.log(results);
    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }

  } catch (error) {
    console.log(error);
  }

}
