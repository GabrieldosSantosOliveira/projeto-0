import styles from '/components/header.module.css';
import Link from 'next/link'
export default function Header() {
    return (
        <>
            <header className={styles.container}>
                <Link href="/">
                    <a>   PROMATCH</a>
                </Link>
            </header>
        </>
    );
}