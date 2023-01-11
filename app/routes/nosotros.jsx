import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export const meta = () => ({
  title: "GuitarLA - Nosotros",
});

export const links = () => ([
  {
    rel: 'stylesheet',
    href: styles
  },
  {
    rel: 'preload',
    href: imagen,
    as: 'image'
  },
]);

export default function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt='Imagen sobre nosotros' />
        <div>
          <p>Nulla ut turpis quis turpis sagittis mattis. Phasellus ut auctor risus, ut congue ex. Nullam consectetur suscipit nunc, sed dictum tortor eleifend at. Nullam finibus, enim ac interdum vulputate, dui arcu vehicula nibh, ut suscipit mi magna ut nulla. Suspendisse nulla turpis, ullamcorper sed posuere non, convallis id sapien. Aenean id dignissim metus. Sed pulvinar, urna quis dapibus consequat, turpis nibh eleifend orci, sed tincidunt nisl nisi et urna. Sed nisl ex, fringilla in felis in, congue vestibulum libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin luctus purus quis iaculis tristique. Nulla laoreet maximus ex eu consequat. Vestibulum et justo at est porta auctor. Cras commodo nunc ipsum, ac ornare tellus hendrerit ac. Nulla laoreet metus sit amet ligula dapibus condimentum.</p>
          <p>Nulla ut turpis quis turpis sagittis mattis. Phasellus ut auctor risus, ut congue ex. Nullam consectetur suscipit nunc, sed dictum tortor eleifend at. Nullam finibus, enim ac interdum vulputate, dui arcu vehicula nibh, ut suscipit mi magna ut nulla. Suspendisse nulla turpis, ullamcorper sed posuere non, convallis id sapien. Aenean id dignissim metus. Sed pulvinar, urna quis dapibus consequat, turpis nibh eleifend orci, sed tincidunt nisl nisi et urna. Sed nisl ex, fringilla in felis in, congue vestibulum libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin luctus purus quis iaculis tristique. Nulla laoreet maximus ex eu consequat. Vestibulum et justo at est porta auctor. Cras commodo nunc ipsum, ac ornare tellus hendrerit ac. Nulla laoreet metus sit amet ligula dapibus condimentum.</p>
        </div>
      </div>
    </main>
  )
}
