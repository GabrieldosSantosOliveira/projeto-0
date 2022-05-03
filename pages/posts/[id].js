import Header from '/components/Header'
import Footer from '/components/Footer'
import Logo from '../../components/Logo'
import AtualizarLivro from '../../components/AtualizarLivro'
import styles from '../../styles/atualizarLivro.module.css'
import api from '../api/api'

//Função pega os dados de um livro especifico
export async function getServerSideProps(context) {
    const id = context.query.id;
    const response = await api.get('/pegar?id=' + id)
    const livros = response.data
    const data = livros[0]
    return {
        props: {
            data
        }
    }
}
export default function Atualizar({ data }) {
    return (
        <>
            <div className={styles.container}>
                <Logo />
                <Header />
                <AtualizarLivro id={data.id} titulo={data.titulo} autor={data.autor} editora={data.editora} data={data.data_publicacao} preco={data.preco} />
                <Footer />
            </div>
        </>
    )
}