import Header from '/components/Header'
import Footer from '/components/Footer'
import Logo from '../../components/Logo'
import AtualizarAutor from '../../components/AtualizarAutor.js'
import styles from '../../styles/AtualizarAutor.module.css'
import api from '../api/api'


//Função pega os dados de um autor especifico
export async function getServerSideProps(context) {
    const id = context.query.id;
    const response = await api.get('/autor?id=' + id)
    const autor = response.data
    const data = autor[0]
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
                <AtualizarAutor id={data.id} nome={data.nome} sobrenome={data.sobrenome} data={data.data_nascimento} />
                <Footer />
            </div>
        </>
    )
}