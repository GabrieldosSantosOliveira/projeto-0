import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AtualizarAutor from "../../components/AtualizarAutor";
import styles from "../../styles/atualizarAutor.module.css";
import api from "../api/api";
import { GetServerSideProps } from "next";

type Autor = {
  data: {
    id: number;
    nome: string;
    sobrenome: string;
    data_nascimento: string;
  };
};
type Context = {
  query: {
    id: number;
  };
};

//Função pega os dados de um autor especifico
export async function getServerSideProps(context: Context) {
  const id = context.query.id;
  const response = await api.get("/autor?id=" + id);
  const autor = response.data;
  const data: Autor = autor[0];
  return {
    props: {
      data,
    },
  };
}
export default function Atualizar({ data }: Autor) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <AtualizarAutor
          id={data.id}
          nome={data.nome}
          sobrenome={data.sobrenome}
          data={data.data_nascimento}
        />
        <Footer />
      </div>
    </>
  );
}
