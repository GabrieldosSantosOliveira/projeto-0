import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/cadastrarLivro.module.css';
import CadastrarLivro from '../../components/CadastrarLivro';
import api from '../api/api';
import { GetStaticProps } from 'next';
type AutorType = {
  autor: [
    {
      id: number;
      nome: string;
      sobrenome: string;
      data_nascimento: string;
    }
  ];
};
export default function cadastrolivros({
  autor
}: AutorType) {
  return (
    <div className={styles.container}>
      <Header />
      <CadastrarLivro autor={autor} />
      <Footer />
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  let response = await api.get('/autor');
  let autor = response.data;
  return {
    props: {
      autor
    }
  };
};
