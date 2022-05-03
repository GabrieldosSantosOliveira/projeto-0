import Header from '/components/Header'
import Footer from '/components/Footer'
import styles from '../../styles/cadastrarAutor.module.css'
import Logo from '../../components/Logo'
import CadastrarAutor from '/components/CadastrarAutor'

export default function cadastro() {
    return (
        <div className={styles.container}>
            <Logo />
            <Header />
            <CadastrarAutor />
            <Footer />
        </div>
    )
}