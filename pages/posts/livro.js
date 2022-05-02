import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import api from '../api/api'
import CardLivros from '../../components/CardLivro'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
export default function Home() {

    const [livros, setLivros] = useState([])
    useEffect(() => {
        api
            .get('/livros')
            .then(response => {
                setLivros(response.data)
            })
            .catch(err => {
                console.log('Deu ruim: ', err)
            })
    }, [])
    const card =
        livros.map(livro => {
            return (
                <div key={livro.id}>
                    <CardLivros id={livro.id} titulo={livro.titulo} autor={livro.autor} editora={livro.editora} data={livro.data_publicacao} preco={livro.preco} />

                </div>
            )
        })

    return (
        <div className={styles.container}>
            <Head>
                <title>ProMatch</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Logo />
            <Header />
            <div className={styles.autor}>
                {card}

            </div>
            <Footer />
        </div>
    )
}