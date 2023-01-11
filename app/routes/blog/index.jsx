import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import ListadoPosts from "~/components/listadoPosts";

export const loader = async () => {
  const posts = await getPosts()
  return posts.data
};

export const meta = () => ({
  title: "GuitarLA - Blog",
  description: "GuitarLA, Blog de música y venta de guitarras"
});

export default function Blog() {
  const posts = useLoaderData()

  return (
    <ListadoPosts posts={posts} />
  )
}
