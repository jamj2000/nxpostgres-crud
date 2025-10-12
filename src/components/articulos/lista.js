'use client'
import { use } from "react"

import Articulo from "@/components/articulos/item"
import Modal from "@/components/Modal"
import Form from "@/components/Form"

import { newArticulo, editArticulo, deleteArticulo } from "@/lib/actions"



function ListaArticulos({ articulos }) {
    const lista = use(articulos)

    return (
        <>
            <Modal openElement={<p className="text-right">NUEVO ARTICULO</p>}>
                <Form action={newArticulo} title={"Nuevo artículo"} articulo={null} />
            </Modal>

            <div className="flex flex-wrap gap-4">
                {
                    lista.map((articulo) => (
                        <Articulo key={articulo.id} articulo={articulo} >
                            <Modal openElement={"EDITAR ARTICULO"}>
                                <Form action={editArticulo} title={"Editar artículo"} articulo={articulo} />
                            </Modal>
                            <Modal openElement={"ELIMINAR ARTICULO"}>
                                <Form action={deleteArticulo} title={"Eliminar artículo"} articulo={articulo} disabled />
                            </Modal>
                        </Articulo>
                    ))
                }
            </div>

        </>
    )
}

export default ListaArticulos