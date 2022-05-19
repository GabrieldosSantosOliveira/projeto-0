import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/cadastrarLivro.module.css";
import CadastrarLivro from "../../components/CadastrarLivro";

export default function cadastrolivros() {
  return (
    <div className={styles.container}>
      <Header />
      <CadastrarLivro />
      <Footer />
    </div>
  );
}
