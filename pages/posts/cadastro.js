import Header from '/components/Header'
import Footer from '/components/Footer'
import Image from 'next/image'
import styles from '../../styles/cadastro.module.css'
import Cadastro from '/components/Cadastro'
export default function cadastro() {
    return (
        <div className={styles.container}>

            <Header />
            <Image
                src='/images/cadastro.jpg'
                alt='Cadastro'
                width={1302.6}
                height={1575.6}
                priority
            />
            <Cadastro />
            <Footer />
        </div>
    )
}