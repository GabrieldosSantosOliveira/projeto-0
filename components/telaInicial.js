import styles from '/components/telaInicial.module.css'
import Link from 'next/link';

export default function telaInicial() {
    return (
        <>
            <aside>
                <div className={styles.container}>
                    <div>
                        Está procurando um projeto
                    </div>
                    <div>
                        Venha conhecer o seu novo projeto de
                        pesquisa e comece a revolucionar mundo
                    </div>
                    <div>
                        O mundo anceia por você, cadastre-se e
                        seja parte dessa revolução
                    </div>
                </div>
                <div className={styles.flexContainer}>
                    <Link href="/posts/login">
                        <a className={styles.entra}>Entre</a>
                    </Link>
                    <Link href="/posts/cadastro">
                        <a className={styles.cadastrar}>Cadastro</a>
                    </Link>
                </div>
            </aside>
        </>
    )
}