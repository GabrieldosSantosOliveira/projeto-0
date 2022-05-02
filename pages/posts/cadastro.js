import Header from '/components/Header'
import Footer from '/components/Footer'
import Image from 'next/image'
import styles from '../../styles/cadastro.module.css'
import Logo from '../../components/Logo'
import Cadastro from '/components/Cadastro'
export default function cadastro() {
    return (
        <div className={styles.container}>
            <Logo />
            <Header />

            <Cadastro />
            <Footer />
        </div>
    )
}