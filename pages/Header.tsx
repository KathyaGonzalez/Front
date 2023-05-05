import Link from "next/link"
import styles from '@/styles/NavBar.module.css'

const Header = () => {
    return (
        <header>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/ProyectosRecientes">Proyectos Recientes</Link>
                </li>
                <li>
                    <Link href="/EducacionHabilidadesProfesionales">Educación y Habilidades Profesionales</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/">Acerca de mí</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header