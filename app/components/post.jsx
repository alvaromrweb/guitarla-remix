import { Link } from '@remix-run/react'
import { formatearFecha } from '~/utils/helpers'

export default function Post({post}) {
  return (
    <article className='post'>
        <Link to={`${post.url}`}>
            <img className='imagen' src={post.imagen.data.attributes.formats.small.url} alt={`Imagen post ${post.titulo}`} />
        </Link>
        <div className='contenido'>
            <Link className='titulo' to={`${post.url}`}>
                <h3>{post.titulo}</h3>
            </Link>
            <p className='fecha'>{formatearFecha(post.publishedAt)}</p>
            <p className='resumen'>{post.contenido}</p>
            <Link to={`${post.url}`} className="enlace">Leer post</Link>
        </div>
    </article>
  )
}
