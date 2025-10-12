
function Form({ action, title, articulo, disabled = false }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={articulo?.id} />

            <fieldset disabled={disabled} className="flex flex-col">
                <label htmlFor='nombre'>Nombre</label>
                <input
                    name='nombre'
                    placeholder='Nombre'
                    defaultValue={articulo?.nombre} />

                <label htmlFor='descripcion'>Descripción</label>
                <input
                    name='descripcion'
                    placeholder='Descripción'
                    defaultValue={articulo?.descripcion} />
                <label htmlFor='precio'>Precio</label>

                <input
                    type='number'
                    name='precio'
                    min='0'
                    step={0.01}
                    placeholder='precio'
                    defaultValue={articulo?.precio} />
            </fieldset>

            <button type='submit' autoFocus>{title}</button>
        </form>
    )
}

export default Form