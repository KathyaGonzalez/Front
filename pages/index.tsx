import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/AcercaDeMi.module.css'
import avatar from "../img/fotoNueva.png"
import Footer from './Footer'
import Header from './Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Acerca de mí</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      </Head>
      <Header />
      <main>
          <div className={`${styles.banner} ${styles.titulo}`}>
              <span className="animate__animated animate__fadeInDown animate__delay-1s">Estudiante de 5to. año de Ingeniería en Informática y Sistemas</span>
          </div>
          <br />
          <div>
              <Image src={avatar} alt="Imagen 1" width={300} height={300} className={styles.avatar}/>
          </div>
          <div className={styles.presentacion}>
              <div className={styles.saludo}>
                  Hola, mi nombre es Kathya González<span>&#160;</span>
              </div>
              <div className={styles.saludo}>
                  es un gusto conocerlo y que visite mi Portafolio.<span>&#160;</span>
              </div>
          </div>
          <div className={`${styles.banner} ${styles.descripcion}`}>
              <span className="animate__animated animate__zoomIn animate__delay-1s">Soy una persona creativa pero me gusta ser racional cuando se requiere,</span>
              <span className="animate__animated animate__zoomIn animate__delay-1s">busco entregar productos completos y presentables.</span>
          </div>
      </main>
      <br />
      <hr />
      <Footer />
    </>
  );
}
