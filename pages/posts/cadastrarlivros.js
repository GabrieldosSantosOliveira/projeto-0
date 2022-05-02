import Header from '/components/Header'
import Footer from '/components/Footer'
import Logo from '../../components/Logo'
import styles from '../../styles/cadastro.module.css'
import Cadastro from '../../components/CadastrarLivros'
export default function cadastrolivros() {
    return (
        <div className={styles.container}>
            <Logo />
            <Header />

            <Cadastro />
            <Footer />
        </div>
    )
}