import Form from "@/components/Form"
import { pool } from "@/lib/postgres"
import { deleteArticulo } from "@/lib/actions"

async function page({ searchParams }) {
  const result = await pool.query('select * from articulos where id=$1', [searchParams.id]);
  // console.log(result);
  const articulo = result.rows[0]
  
  return (
    <div>
      <h3>Eliminar artículo {searchParams.id}</h3>
      <Form action={deleteArticulo} title='Eliminar artículo' articulo={articulo} disabled={true} />
    </div>
  )
}

export default page