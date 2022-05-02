import { useRouter } from 'next/router'
import Header from '/components/Header'
import Footer from '/components/Footer'
import Logo from '../../components/Logo'
import Atualiza from '../../components/AtualizarLivro'
import styles from '../../styles/cadastro.module.css'
import axios from 'axios'

export async function getServerSideProps(context) {
    const id = context.query.id;
    const url = 'https://skeleton-nodejs-express-ejs.gabrieldos7.repl.co/pegar?id=' + id;
    console.log(url)

    const response = await axios.get(url)
    const livros = response.data
    const data = livros[0]


    return {
        props: {
            id: data.id,
            titulo: data.titulo,
            autor: data.autor,
            editora: data.editora,
            data_publicacao: data.data_publicacao,
            preco: data.preco,
        }
    }
}
export default function Atualizar(props) {
    return (
        <>
            <div className={styles.container}>
                <Logo />
                <Header />
                <Atualiza id={props.id} titulo={props.titulo} autor={props.autor} editora={props.editora} data={props.data_publicacao} preco={props.preco} />
                <Footer />
            </div>
        </>
    )
}