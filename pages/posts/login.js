import Header from '/components/Header'
import Footer from '/components/Footer'
import Image from 'next/image'
import styles from '../../styles/login.module.css'
import Login from '/components/Login'
export default function cadastro() {
    return (
        <div className={styles.container}>

            <Header />
            <Image
                src='/images/cadastro.jpg'
                alt='Cadastro'
                width={1302.6}
                height={1575.6}

            />
            <Login />
            <Footer />
        </div>
    )
}