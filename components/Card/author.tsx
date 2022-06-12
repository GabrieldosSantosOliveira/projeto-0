import { formatDate } from '../Utils/utils';
import styles from './author.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import api from '../../pages/api/api';

type AutorType = {
  id?: number;
  nome: string;
  sobrenome: string;
  data: string;
};

export default function CardAutor(props: AutorType) {
  const { data, nome, sobrenome, id } = props;
  // Função chamada para deletar o autor do banco
  async function Deletar() {
    let confirmacao = confirm('Você quer deletar o Autor?');
    if (confirmacao == true) {
      const response = await api.delete(`/autor/${id}`);
      console.log(response);
      if (!response.statusText) alert('Autor Não Excluido');

      alert('Autor Excluido');
    } else {
      alert('Autor não excluido');
    }
  }

  return (
    <div className={styles.container}>
      <div>{props.nome + ' ' + props.sobrenome}</div>
      <div>{formatDate(props.data)}</div>
      <div className={styles.botoes}>
        <button onClick={Deletar}>Deletar</button>
        <Link href={`/author/Update/${id}`}>
          <a>Atualizar</a>
        </Link>
        <Link href={`/author/MoreDetails/${id}`}>
          <a>Mais Detalhes</a>
        </Link>
      </div>
    </div>
  );
}
