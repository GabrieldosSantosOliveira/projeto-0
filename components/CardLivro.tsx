import { formatDate } from "../pages/api/utils";
import { useRouter } from "next/router";
import styles from "/components/cardlivro.module.css";
import api from "../pages/api/api";

type Props = {
  id?: number;
  titulo: string;
  autor: number;
  editora: string;
  data: string;
  preco: string;
};

export default function CardLivro(props: Props) {
  async function Deletar() {
    // Função chamada para deletar o livro do banco
    let confirmacao = confirm("Você quer deletar o Livro?");
    if (confirmacao == true) {
      const response = await api.delete("/deletar/livros/" + props.id);
      console.log(response);
      alert("Livro Excluido");
    } else {
      alert("Livro não excluido");
    }
  }
  const router = useRouter();
  // Função envia o usuario para a pagina de atualização
  function atualizar() {
    router.push("/posts/" + props.id);
  }
  return (
    <div className={styles.container}>
      <div>{formatDate(props.data)}</div>
      <div>{props.titulo + " - " + props.editora}</div>

      <div>{"R" + props.preco}</div>
      <button onClick={Deletar}>Deletar</button>
      <button onClick={atualizar}>Atualizar</button>
    </div>
  );
}
