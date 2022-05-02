import { useRouter } from 'next/router'
import Header from '/components/Header'
import Footer from '/components/Footer'
import Logo from '../../components/Logo'
import Atualiza from '../../components/AtualizarAutor.js'
import styles from '../../styles/cadastro.module.css'
import axios from 'axios'

export async function getServerSideProps(context) {
    const id = context.query.id;
    const url = 'https://skeleton-nodejs-express-ejs.gabrieldos7.repl.co/autor?id=' + id;
    const response = await axios.get(url)
    const autor = response.data
    const data = autor[0]


    return {
        props: {
            id: data.id,
            nome: data.nome,
            sobrenome: data.sobrenome,
            data_nascimento: data.data_nascimento,
        }
    }
}
export default function Atualizar(props) {
    const router = useRouter()
    return (
        <>
            <div className={styles.container}>
                <Logo />
                <Header />
                <Atualiza id={props.id} nome={props.nome} sobrenome={props.sobrenome} data={props.data_nascimento} />
                <Footer />
            </div>
        </>
    )
}