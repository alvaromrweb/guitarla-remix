import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export const loader = async ({ params }) => {
    const url = params.url
    const post = await getPost(url)

    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post no encontrado'
        })
    }

    return post.data[0]
};

export const meta = ({data}) => {
    if(!data) {
        return {
            title: `GuitarLA - Post no encontrado`,
            description: `GuitarLA, Blog de música y venta de guitarras, post no encontrado`
        }
    }

    const { titulo } = data.attributes
    return {
        title: `GuitarLA - ${titulo}`,
        description: `GuitarLA, Blog de música y venta de guitarras, post ${titulo}`
    }
};



export default function Post() {
    const post = useLoaderData()
        const { titulo, contenido, imagen, publishedAt } = post.attributes
  return (
    <article className="contenedor post mt-3">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen post ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}
