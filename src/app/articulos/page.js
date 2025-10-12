import ListaArticulos from '@/components/articulos/lista'
import { getArticulos } from '@/lib/actions'
import { Suspense } from 'react'


export default async function Home() {
    const articulos = getArticulos()

    return (
        <Suspense fallback="Recuperando datos...">
            <ListaArticulos articulos={articulos} />
        </Suspense>

    )
}
