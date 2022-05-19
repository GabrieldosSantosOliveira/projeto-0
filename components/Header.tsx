import Link from "next/link";
import styles from "../components/header.module.css";
import { useState } from "react";
export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <h3 className={styles.logo}>PROJMATCH</h3>
        <ul
          className={
            isMobile
              ? styles.navLinksMobile + " " + styles.navLinks
              : styles.navLinks
          }
          onClick={() => setIsMobile(false)}
        >
          <li className={styles.autor}>
            <Link href="/posts/cadastrarAutor">
              <a>Autores</a>
            </Link>
          </li>
          <li className={styles.livro}>
            <Link href="/posts/cadastrarLivro">
              <a>Livros</a>
            </Link>
          </li>
          <li className={styles.mostrarAutor}>
            <Link href="/">
              <a>Mostrar Autores</a>
            </Link>
          </li>
          <li className={styles.mostrarLivro}>
            <Link href="/posts/mostrarLivro">
              <a>Mostrar Livro</a>
            </Link>
          </li>
        </ul>
        <button
          className={styles.mobileMenuIcon}
          onClick={() => setIsMobile(!isMobile)}
        >
          <div className={isMobile ? styles.animate : styles.animation}></div>
        </button>
      </nav>
    </>
  );
}
