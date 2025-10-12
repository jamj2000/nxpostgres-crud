import ListaArticulos from '@/components/articulos/lista'
import { getArticulos } from '@/lib/actions'
import { Suspense } from 'react'


export default async function Home() {
    const articulos = getArticulos()

    return (
        <section>
            <h1 className='text-xl'>Artículos</h1>
            <hr />

            <Suspense fallback="Recuperando datos...">
                <ListaArticulos articulos={articulos} />
            </Suspense>
        </section>
    )
}
