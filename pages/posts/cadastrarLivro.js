import Header from '/components/Header'
import Footer from '/components/Footer'
import Logo from '../../components/Logo'
import styles from '../../styles/cadastrarLivro.module.css'
import CadastrarLivro from '../../components/CadastrarLivro'

export default function cadastrolivros() {
    return (
        <div className={styles.container}>
            <Logo />
            <Header />
            <CadastrarLivro />
            <Footer />
        </div>
    )
}