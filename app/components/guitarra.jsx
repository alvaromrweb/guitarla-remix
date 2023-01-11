import { Link } from "@remix-run/react"

export default function Guitarra({guitarra}) {
    const imagen = guitarra.imagen.data.attributes.formats.medium.url
    return (
        <div className="guitarra">
            <Link to={`/guitarras/${guitarra.url}`}>
                <img src={imagen} alt={`Imagen guitarra ${guitarra.nombre}`} />
            </Link>
            <div className="contenido">
                <Link className="titulo" to={`/guitarras/${guitarra.url}`}>
                    <h3>{guitarra.nombre}</h3>
                </Link>
                <p className="descripcion">{guitarra.descripcion}</p>
                <p className="precio">{guitarra.precio} €</p>

                <Link className="enlace" to={`/guitarras/${guitarra.url}`}>Ver producto</Link>
            </div>
            
        </div>
    )
}
