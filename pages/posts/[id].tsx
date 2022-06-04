import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AtualizarLivro from "../../components/AtualizarLivro";
import styles from "../../styles/atualizarLivro.module.css";
import api from "../api/api";
import { Autor } from "../../components/CadastrarLivro";
type Livro = {
  data: {
    id: number;
    titulo: string;
    autor: number;
    editora: string;
    data_publicacao: string;
    preco: string;
  };
  autor: Autor[]
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

  const resposta = await api.get("/")
  const autor = resposta.data
  return {
    props: {
      data,
      autor
    },
  };
}
export default function Atualizar({ data ,autor }: Livro) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <AtualizarLivro
          livro={data}
          newAutor={autor}
        />
        <Footer />
      </div>
    </>
  );
}
