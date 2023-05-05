import Image from "next/image"
import styles from "../styles/Post.module.css"
import Link from "next/link"
import { formatearFecha } from "./funcion/formatearFecha"

interface Props {
    _id: string,
    tittle: string,
    content: string,
    image: any,
    date: string,
    name: string
  }
  
const Post = ({tittle, image, date, name}: Props) => {
    return (
        <Link href={`blog/${name}`}>
            <article className={styles.tarjetaArticulo}>
                <Image 
                    src= {`${image}`}
                    width={400}
                    height={200}
                    alt={tittle}
                />
                <div>
                    <h3>{tittle}</h3>
                    <p>{formatearFecha(date)}</p>
                </div>
            </article>
        </Link>
    )
}

export default Post