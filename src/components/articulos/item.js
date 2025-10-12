

function Articulo({ children, articulo }) {
    return (
        <div className="border border-slate-200 bg-slate-100 w-80 p-8 rounded">
            <p><strong>{articulo.nombre}</strong></p>
            <p>{articulo.descripcion}</p>
            <p>{articulo.precio} €</p>
            <div className=" mt-4 flex gap-4 justify-end">
                {children}
            </div>
        </div>
    )
}

export default Articulo