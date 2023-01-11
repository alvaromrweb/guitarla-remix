import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { getCurso } from "~/models/curso.server";
import ListadoGuitarras from "~/components/listadoGuitarras";
import ListadoPosts from "~/components/listadoPosts";
import Curso from "~/components/curso";
import guitarraCss from "~/styles/guitarras.css"
import blogCss from "~/styles/blog.css"
import cursoCss from "~/styles/curso.css"

export const loader = async () => {

  // Para que empiecen las 2 consultas a la vez, en vez de esperar a que finalice 1 primero
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
};

export const meta = () => ({
  title: "GuitarLA - Inicio",
});

export const links = () => ([
  {
    rel: 'stylesheet',
    href: guitarraCss
  },
  {
    rel: 'stylesheet',
    href: blogCss
  },
  {
    rel: 'stylesheet',
    href: cursoCss
  },
]);

export default function Index() {
  const {guitarras, posts, curso} = useLoaderData()
  
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}
