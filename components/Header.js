import styles from '/components/header.module.css';
import Link from 'next/link'
import { UserCirclePlus, ListDashes, Books, Book } from 'phosphor-react'
export default function Header() {
    return (
        <>
            <header className={styles.container}>
                <div>
                    <Link href="/">
                        <a>
                            <UserCirclePlus className={styles.item} size={20} />
                            Autor
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="/posts/livro">
                        <a>
                            <Book className={styles.item} size={20} />

                            Livro
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="/posts/cadastro">
                        <a>
                            <ListDashes className={styles.item} size={20} />

                            Mostrar Autor
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="/posts/cadastrarlivros">
                        <a>
                            <Books className={styles.item} size={20} />

                            Mostrar Livro
                        </a>
                    </Link>
                </div>
            </header>
        </>
    );
}