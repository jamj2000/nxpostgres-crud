'use client'
import Link from "next/link"
import Articulo from "@/components/articulos/item"
import { use } from "react"


function ListaArticulos({ articulos }) {
    const lista = use(articulos)

    return (
        <div>
            <Link className='enlace' href="/articulos/new"> Nuevo artículo </Link>
            {
                lista.map((articulo) => (
                    <Articulo key={articulo.id} articulo={articulo} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/articulos/edit', query: { id: articulo.id } }}>
                            Editar artículo
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/articulos/delete', query: { id: articulo.id } }}>
                            Eliminar artículo
                        </Link>
                    </Articulo>
                ))
            }
        </div>
    )
}

export default ListaArticulos