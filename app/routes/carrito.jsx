import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import styles from "~/styles/carrito.css"
import { ClientOnly } from "remix-utils";

export const meta = () => ({
    title: "GuitarLA - Carrito",
  });
  

export const links = () => ([
    {
      rel: 'stylesheet',
      href: styles
    },
  ]);

export default function Carrito() {
  const [total, setTotal] = useState(0)
  const {carrito, updateCart, removeFromCart} = useOutletContext()

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (accumulator, producto) => accumulator + producto.precio * producto.cantidad, 0
    )
    setTotal(calculoTotal)
  }, [carrito])
  

  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>
            <div className="contenido">
                <div className="carrito">
                    <h2>Articulos</h2>

                    {carrito?.length ? (
                      carrito?.map(producto => (
                        <div key={producto.id} className="producto">
                          <div>
                            <img src={producto.imagen} alt={`Imagen producto ${producto.nombre}`} />
                          </div>
                          <div>
                            <p className="nombre">{producto.nombre}</p>
                            <p className="cantidad">Cantidad:</p>
                            <select value={producto.cantidad} className="select" onChange={e => updateCart({id: producto.id, cantidad: e.target.value})}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                            

                            <p className="precio"><span>{producto.precio}</span> €</p>
                            <p className="subtotal">Subtotal: <span>{producto.precio * producto.cantidad}</span> €</p>
                          </div>
                          
                          <button type="button" className="btn-eliminar" onClick={() => removeFromCart(producto.id)}>X</button>
                        </div>
                      ))
                    ) : 'No hay artículos'}
                </div>
                <aside className="resumen">
                    <h3>Resumen del pedido</h3>
                    <p>Total a pagar: {total}€</p>
                </aside>
            </div>
        </main>
      )}
    </ClientOnly>
  )
}
