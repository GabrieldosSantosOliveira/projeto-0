import { formatDate } from '../Utils/utils';
import Link from 'next/link';
import styles from './book.module.css';
import api from '../../pages/api/api';

type LivroType = {
  id?: number;
  titulo: string;
  autor: number;
  editora: string;
  data: string;
  preco: string;
};

export default function CardLivro({
  id,
  autor,
  data,
  editora,
  preco,
  titulo
}: LivroType) {
  async function Deletar() {
    // Função chamada para deletar o livro do banco
    let confirmacao = confirm('Você quer deletar o Livro?');
    if (confirmacao == true) {
      const response = await api.delete(`/livros/${id}`);
      console.log(response);
      if (!response.statusText) alert('Livro Não Excluido');
      alert('Livro Excluido');
    } else {
      alert('Livro não excluido');
    }
  }

  return (
    <div className={styles.container}>
      <div>{formatDate(data)}</div>
      <div>{titulo + ' - ' + editora}</div>

      <div>{'R' + preco}</div>
      <button onClick={Deletar}>Deletar</button>

      <Link href={`/book/Update/${id}`}>
        <a>Atualizar</a>
      </Link>
      <Link href={`/book/MoreDetails/${id}`}>
        <a>Mostrar mais detalhes</a>
      </Link>
    </div>
  );
}
