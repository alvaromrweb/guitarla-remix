import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getGuitarra } from "~/models/guitarras.server";

export const loader = async ({ params }) => {
    const url = params.url
    const guitarra = await getGuitarra(url)

    if(guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }

    return guitarra.data[0]
};

export const meta = ({data}) => {
    if(!data) {
        return {
            title: `GuitarLA - Guitarra no encontrada`,
            description: `Guitarras, venta de guitarras, guitarra no encontrada`
        }
    }

    const { nombre } = data.attributes
    return {
        title: `GuitarLA - ${nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${nombre}`
    }
};


export default function Guitarra() {
    const [cantidad, setCantidad] = useState(1)
    const guitarra = useLoaderData()
    const { addToCart } = useOutletContext()
    const { nombre, descripcion, imagen, precio } = guitarra.attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1) {
            alert('Debes seleccionar una cantidad')
            return
        }

        const producto = {
            id: guitarra.id,
            nombre,
            imagen: imagen.data.attributes.url,
            precio,
            cantidad
        }

        addToCart(producto)
    }

  return (
    <div className="guitarra">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} />
        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="texto">{descripcion}</p>
            <p className="precio">{precio} €</p>
            
            <form onSubmit={handleSubmit} className="formulario">
                <label htmlFor="cantidad">Cantidad</label>
                <select id="cantidad" onChange={e => setCantidad(+e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" value="Añadir al carrito" />
            </form>
        </div>
    </div>
  )
}
