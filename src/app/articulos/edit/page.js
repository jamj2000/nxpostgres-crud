import Form from "@/components/Form"
import { pool } from "@/lib/postgres"
import { editArticulo } from "@/lib/actions"

async function page({searchParams}) {
  const result = await pool.query('select * from articulos where id=$1', [ searchParams.id ]);
  // console.log(result);
  const articulo = result.rows[0]

  return (
    <div>
        <h3>Editar artículo {searchParams.id}</h3>
        <Form action={editArticulo} title='Editar artículo' articulo={articulo} disabled={false}  />
    </div>
  )
}


export default page