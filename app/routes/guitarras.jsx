import { Outlet, useOutletContext } from "@remix-run/react";
import styles from "~/styles/guitarras.css"

export const links = () => ([
  {
    rel: 'stylesheet',
    href: styles
  },
]);

export default function Tienda() {
  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()} />
    </main>
  )
}
