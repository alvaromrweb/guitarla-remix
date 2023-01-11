import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import styles from './styles'
import Header from "~/components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export const meta = () => ({
  charset: "utf-8",
  title: "GuitarLA - Remix",
  description: "Venta de guitarras y blog de música",
  viewport: "width=device-width,initial-scale=1",
});


export const links = () => ([
  
  {
    rel: 'stylesheet',
    href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'true'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
  },
  {
    rel: 'stylesheet',
    href: styles
  },
])

export default function App() {
  const carritoLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  
  

  const addToCart = producto => {
    if(carrito.some(productoState => productoState.id === producto.id)) {
      const carritoActualizado = carrito.map(productoState => {
        if(productoState.id === producto.id) {
          productoState.cantidad += producto.cantidad
        }
        return productoState
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, producto])
    }
    // localStorage.setItem('carrito', carrito)
  }

  const updateCart = producto => {
      const carritoActualizado = carrito.map(productoState => {
        if(productoState.id === producto.id) {
          productoState.cantidad = producto.cantidad
        }
        return productoState
      })
      setCarrito(carritoActualizado)
  }

  const removeFromCart = idProducto => {
      const carritoActualizado = carrito.filter(productoState => productoState.id !== idProducto) 
      setCarrito(carritoActualizado)
  }

  return (
    <Document>
      <Outlet context={{
        carrito,
        addToCart,
        updateCart,
        removeFromCart,
      }} />
    </Document>
  );
}

function Document ({children}) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// Manejo errores
export function CatchBoundary() {
  const error = useCatch()
  return (
    <Document>
      <p className="error">{error.status} {error.statusText} </p>
      <Link className="error-enlace" to="/">Volver a la página principal</Link>
    </Document>
  )
}

export function ErrorBoundary({error}) {
  return (
    <Document>
      <p className="error">{error.status} {error.statusText} </p>
      <Link className="error-enlace" to="/">Volver a la página principal</Link>
    </Document>
  )
}

