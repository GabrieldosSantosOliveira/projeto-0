import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/cadastrarLivro.module.css";
import CadastrarLivro from "../../components/CadastrarLivro";
import api from "../api/api";
import { Autor } from "../../components/CadastrarLivro";
import { GetStaticProps } from "next";
export default function cadastrolivros({autor}: {autor: Autor[]}) {
  return (
    <div className={styles.container}>
      <Header />
      <CadastrarLivro autor={autor}/>
      <Footer />
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  let response = await api.get('/')
  console.log(response)
  let autor = response.data
  
  console.log(autor)
    return {
    props:{
     autor
    }
  }
  }