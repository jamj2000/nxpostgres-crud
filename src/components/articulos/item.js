

function Articulo({ children, articulo }) {
    return (
        <div className="border border-slate-200 bg-slate-100 w-80 p-8 rounded">
            <p><strong>{articulo.nombre}</strong></p>
            <p>{articulo.descripcion}</p>
            <p>{articulo.precio} €</p>
            {children}
        </div>
    )
}

export default Articulo