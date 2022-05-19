import { formatDate } from "../pages/api/utils";
import styles from "/components/cardautor.module.css";
import { useRouter } from "next/router";
import api from "../pages/api/api";

type Props = {
  id?: number;
  nome: string;
  sobrenome: string;
  data: string;
};

export default function CardAutor(props: Props) {
  // Função chamada para deletar o autor do banco
  async function Deletar() {
    let confirmacao = confirm("Você quer deletar o Autor?");
    if (confirmacao == true) {
      const response = await api.delete("/deletar/" + props.id);
      console.log(response);
      alert("Autor Excluido");
    } else {
      alert("Autor não excluido");
    }
  }
  const router = useRouter();
  // Função envia o usuario para a pagina de atualização
  function Atualizar() {
    router.push("/autor/" + props.id);
  }
  return (
    <div className={styles.container}>
      <div>{props.nome + " " + props.sobrenome}</div>
      <div>{formatDate(props.data)}</div>
      <div className={styles.botoes}>
        <button onClick={Deletar}>Deletar</button>
        <button onClick={Atualizar}>Atualizar</button>
      </div>
    </div>
  );
}
