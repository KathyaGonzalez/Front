import Footer from './Footer'
import Header from './Header'
import styles from '@/styles/Articulo.module.css'
import stylesNotFound from '@/styles/NotFound.module.css'

const NotFound = () => {
    return (
        <>
        <Header />
        <div className={`${styles.banner} ${styles.titulo}`}>
            <span className={`"animate__animated animate__fadeInDown animate__delay-1s" ${styles.encabezadoBanner}`}>
                404
            </span>
        </div>
        <div>
            <p className={stylesNotFound.mensaje}>
                Lo sentimos, la página solicitada no existe.
            </p>
        </div>
        <hr />
        <Footer />
        </>
    )
}

export default NotFound;