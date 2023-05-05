import Footer from '../Footer'
import Header from '../Header'
import styles from '@/styles/PostIndividual.module.css'
import Image from "next/image"
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

const formatearFecha = (date: string) => {
  const  newDate = new Date(date);
  return newDate.toLocaleDateString('en-US');
}

const PostIndividual = ({articuloIndividual}: any) => {
    const {tittle, content, createdAt} = articuloIndividual;
    return (
        <>
            <Header />
                <div className={`${styles.banner} ${styles.titulo}`}>
                    <span className={`"animate_animated animatefadeInDown animate_delay-1s" ${styles.encabezadoBanner}`}>
                        {tittle}
                    </span>
                </div>
                <div className={`${styles.postIndividual}`}>
                    <Image className={`${styles.imagen}`}
                        src= {`${articuloIndividual.image.data.attributes.url}`}
                        alt={tittle}
                        width={400}
                        height={200}
                    />
                    <p>{formatearFecha(createdAt)}</p>
                    <ReactMarkdown className={`${styles.contenidoPost}`}>{content}</ReactMarkdown>
                </div>
                <hr />
            <Footer />
        </>
    )
}

export default PostIndividual;

export async function getServerSideProps({query}: any) {
    const { name } = query;
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?name=${name}&populate=*`;
    const response = await axios.get(url, {
      headers: {
        Autorization: `Bearer ${process.env.STRAPI_KEY}`
      }
    })
    let num = 1
    if (name === "bases-de-datos-relacionales-vs-bases-de-datos-no-relacionales") {
      num = 0
    }
    const responseJson = await response.data.data[num].attributes;
    return {
      props: {
        articuloIndividual: responseJson,
      }
    }
  }
