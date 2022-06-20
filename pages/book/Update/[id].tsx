import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AtualizarLivro from '../../../components/Update/book';
import styles from '../../../styles/atualizarLivro.module.css';
import api from '../../api/api';
import { GetServerSideProps } from 'next';

type LivroType = {
  livro: {
    id: number;
    titulo: string;
    autorId: number;
    editora: string;
    data_publicacao: string;
    preco: string;
  };
  autor: AutorType[];
};

type AutorType = {
  id: number;
  nome: string;
  sobrenome: string;
  data_nascimento: string;
};

//Função pega os dados de um livro especifico
export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const id = ctx.params?.id;
    const response = await api.get(`/livros/${id}`);
    const livro = response.data;
    const resposta = await api.get('/autor');
    const autor = resposta.data;
    return {
      props: {
        livro,
        autor
      }
    };
  };
export default function Atualizar({
  livro,
  autor
}: LivroType) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <AtualizarLivro livro={livro} newAutor={autor} />
        <Footer />
      </div>
    </>
  );
}
