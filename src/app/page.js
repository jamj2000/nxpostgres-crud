import Link from 'next/link'


export default async function Home() {
  return (
    <section>
      <h1 className='text-xl'>Página de inicio</h1>
      <hr />
      <p>
        Esto es una App de demostración que realiza las 4 operaciones CRUD en una base de datos.
      </p>
      <ul>
        <li>C: CREATE</li>
        <li>R: READ</li>
        <li>U: UPDATE</li>
        <li>D: DELETE</li>
      </ul>
    </section>
  )
}
