import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AtualizarLivro from "../../components/AtualizarLivro";
import styles from "../../styles/atualizarLivro.module.css";
import api from "../api/api";

type Livro = {
  data: {
    id: number;
    titulo: string;
    autor: number;
    editora: string;
    data_publicacao: string;
    preco: string;
  };
};
type Context = {
  query: {
    id: number;
  };
};

//Função pega os dados de um livro especifico
export async function getServerSideProps(context: Context) {
  const id = context.query.id;
  console.log(context.query);
  const response = await api.get("/pegar?id=" + id);
  const livros = response.data;
  const data = livros[0];
  return {
    props: {
      data,
    },
  };
}
export default function Atualizar({ data }: Livro) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <AtualizarLivro
          id={data.id}
          titulo={data.titulo}
          autor={data.autor}
          editora={data.editora}
          data={data.data_publicacao}
          preco={data.preco}
        />
        <Footer />
      </div>
    </>
  );
}
