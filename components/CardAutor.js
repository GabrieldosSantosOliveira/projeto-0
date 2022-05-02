
import { formatDate } from '../pages/api/utils'
import styles from '/components/cardautor.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function CardAutor({ id, nome, sobrenome, data }) {
    async function Deletar() {
        let confirmacao = confirm("Você quer deletar o Autor?")
        if (confirmacao == true) {
            const data = {
                "id": id
            }
            console.log(data)
            const response = await axios.delete("https://skeleton-nodejs-express-ejs.gabrieldos7.repl.co/deletar", data)
            console.log(response);
            alert("Autor Excluido")
        } else {
            alert("Autor não excluido")
        }
    }
    const router = useRouter()

    function Atualizar() {
        let url = "/autor/" + id;
        console.log(url)
        router.push(url)
    }
    return (
        <div className={styles.container}>
            <div>
                <div>{nome + " " + sobrenome}</div>
                <span >{formatDate(data)}</span>
                <button onClick={Deletar}>Deletar</button>
                <button onClick={Atualizar}>Atualizar</button>
            </div>
        </div>
    );
}