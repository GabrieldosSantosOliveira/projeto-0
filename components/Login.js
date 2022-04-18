import styles from '/components/login.module.css'
import { useState } from 'react'


export default function Login() {

    const [formValue, setFormValue] = useState({})

    const handleSubmite = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }


    return (
        <>

            <form onSubmit={handleSubmite} className={styles.container}>
                <div>Cadastro</div>
                <input type="email" name="email" required aria-label="Nome Completo" placeholder='Nome Completo' onChange={handleSubmite} value={formValue.username || ''} />
                <input type="password" name="date" required aria-label="Data de Nascimento" placeholder='Senha' onChange={handleSubmite} value={formValue.date || ''} />

                <button type="submit">Confirmar</button>
            </form>
        </>
    )
}