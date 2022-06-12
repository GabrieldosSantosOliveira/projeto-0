import { GetServerSideProps } from 'next';
import api from '../../api/api';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import styles from '../../styles/livroDinamico.module.css';

export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const id = ctx.params?.id;
    const response = await api.get(`/livros/${id}`);
    const livro = response.data;
    return {
      props: {
        livro
      }
    };
  };
type LivroType = {
  livro: {
    id: number;
    titulo: string;
    autor: number;
    editora: string;
    data_publicacao: string;
    preco: string;
  };
};
export default function Livro({ livro }: LivroType) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div>{livro.id}</div>
          <div>{livro.autor}</div>
          <div>{livro.titulo}</div>
          <div>{livro.editora}</div>
          <div>{livro.data_publicacao}</div>
          <div>{livro.preco}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
