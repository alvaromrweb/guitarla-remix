import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listadoGuitarras";

export const loader = async () => {
  const guitarras = await getGuitarras()
  return guitarras.data
};

export const meta = () => ({
  title: "GuitarLA - Tienda de guitarras",
  description: "GuitarLA - Nuestra colección de guitarras"
});

export default function Tienda() {
  const guitarras = useLoaderData()
  return (
      <ListadoGuitarras guitarras={guitarras} />
  )
}
