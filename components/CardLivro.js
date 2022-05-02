import { formatDate } from '../pages/api/utils'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '/components/cardlivros.module.css'
import axios from 'axios'
export default function CardLivros({ id, titulo, autor, editora, data, preco }) {

    async function Deletar() {
        let confirmacao = confirm("Você quer deletar o Livro?")
        if (confirmacao == true) {
            const data = {
                "id": id
            }
            console.log(data)
            const response = await axios.delete("https://skeleton-nodejs-express-ejs.gabrieldos7.repl.co/deletar/livros", data)
            console.log(response);
            alert("Livro Excluido")
        } else {
            alert("Livro não excluido")
        }
    }
    const router = useRouter()

    function atualizar() {
        let url = "/posts/" + id;
        console.log(url)
        router.push(url)
    }
    return (
        <div className={styles.container}>
            <div>
                <span >{formatDate(data)}</span>
            </div>
            <h2>{titulo + " - " + editora}</h2>

            <h3>{"R" + preco}</h3>
            <button onClick={Deletar}>Deletar</button>
            <button onClick={atualizar}>Atualizar</button>

        </div>
    );
}