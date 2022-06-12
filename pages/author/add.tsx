import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/cadastrarAutor.module.css';
import CadastrarAutor from '../../components/Create/author';

export default function cadastro() {
  return (
    <div className={styles.container}>
      <Header />
      <CadastrarAutor />
      <Footer />
    </div>
  );
}
