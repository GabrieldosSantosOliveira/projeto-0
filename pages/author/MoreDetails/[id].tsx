import { GetServerSideProps } from 'next';
import api from '../../api/api';
import Header from './../../../components/Header';
import Footer from './../../../components/Footer';
import styles from '../../../styles/livroDinamico.module.css';

type AutorType = {
  autor: {
    id: number;
    nome: string;
    sobrenome: string;
    data_nascimento: string;
  };
};
export const getServerSideProps: GetServerSideProps =
  async (ctx) => {
    const id = ctx.params?.id;
    const response = await api.get(`/autor/${id}`);
    const autor = response.data;
    return {
      props: {
        autor
      }
    };
  };

export default function MoreDetails({ autor }: AutorType) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div>{autor.id}</div>
          <div>{autor.data_nascimento}</div>
          <div>{`${autor.nome} ${autor.sobrenome}`}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
