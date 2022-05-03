import { formatDate } from '../pages/api/utils'
import { useRouter } from 'next/router'
import styles from '/components/cardlivros.module.css'
import api from '../pages/api/api'
export default function CardLivro({ id, titulo, autor, editora, data, preco }) {

    async function Deletar() {
        // Função chamada para deletar o livro do banco
        let confirmacao = confirm("Você quer deletar o Livro?")
        if (confirmacao == true) {
            const response = await api.delete("/deletar/livros/" + id)
            console.log(response);
            alert("Livro Excluido")
        } else {
            alert("Livro não excluido")
        }
    }
    const router = useRouter()
    // Função envia o usuario para a pagina de atualização
    function atualizar() {
        router.push("/posts/" + id)
    }
    return (
        <div className={styles.container}>
            <div>
                {formatDate(data)}
            </div>
            <div>{titulo + " - " + editora}</div>

            <div>{"R" + preco}</div>
            <button onClick={Deletar}>Deletar</button>
            <button onClick={atualizar}>Atualizar</button>

        </div>
    );
}