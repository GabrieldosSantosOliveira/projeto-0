import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AtualizarAutor from '../../../components/Update/author';
import styles from '../../../styles/atualizarAutor.module.css';
import api from '../../api/api';
import { GetServerSideProps } from 'next';

type Autor = {
  autor: {
    id: number;
    nome: string;
    sobrenome: string;
    data_nascimento: string;
  };
};

//Função pega os dados de um autor especifico
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
export default function Atualizar({ autor }: Autor) {
  const { data_nascimento, id, nome, sobrenome } = autor;
  return (
    <>
      <div className={styles.container}>
        <Header />
        <AtualizarAutor
          id={id}
          nome={nome}
          sobrenome={sobrenome}
          data={data_nascimento}
        />
        <Footer />
      </div>
    </>
  );
}
