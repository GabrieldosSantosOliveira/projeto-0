import styles from '/components/logo.module.css';
import Link from 'next/link'
export default function Logo() {
    return (

        <header className={styles.container}>

            <Link href="/">
                <a>PROJMATCH</a>
            </Link>
        </header>
    );
}