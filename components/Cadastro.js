import styles from '/components/cadastro.module.css'
import { useState } from 'react'
import MaskedInput from './MaskedInput'
import institutos from "./json/institutos.json"
import curso from "./json/curso.json"


const instituto = institutos.map(valor => {
    return <option value={valor.sigla} key={valor.sigla}>{valor.nome}</option>
})
const select = curso.map(valor => {
    return <option value={valor} key={valor}>{valor}</option>
})


export default function Cadastro() {

    const [formValue, setFormValue] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleSubmite = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
    }


    return (
        <>

            <form onSubmit={handleSubmite} className={styles.container}>
                <div>Cadastro</div>

                <input type="text" name="username" required aria-label="Nome Completo" placeholder='Nome Completo' onChange={handleInputChange} value={formValue.username || ''} />

                <MaskedInput name="data" mask="99/99/9999" placeholder="Data de Nascimento" value={formValue.data || ''} onChange={handleInputChange} />
                <MaskedInput name="cpf" mask="999.999.999-99" placeholder="Cpf" value={formValue.cpf || ''} onChange={handleInputChange} />

                <select name='ocupa' onChange={handleInputChange} value={formValue.ocupa || ''}>

                    <option hidden>Selecine sua ocupação</option>
                    <option value="Estudante">Estudante</option>
                    <option value="Professor">Professor</option>

                </select>

                <select name='area' onChange={handleInputChange} value={formValue.area || ''}>

                    <option value="cargo" hidden>Selecione sua formação</option>
                 /*Chamada da função que ira renderizar as opções de cursos*/
                    {select}
                </select>

                <select name='institution' onChange={handleInputChange} value={formValue.institution || ''}>
                    <option value="cargo" hidden>Selecione seu Instituto</option>
                    /*Chamada da função que ira renderizar as opções de institutos*/
                    {instituto}

                </select>

                <input type="email" name="email" required aria-label="E-mail" placeholder='E-mail' onChange={handleInputChange} value={formValue.email || ''} />

                <input type="password" name="password" required aria-label="Senha " placeholder='Senha' onChange={handleInputChange} value={formValue.password || ''} />
                <input type="password" name="confirme" required aria-label="Confirme Senha" placeholder='Confirme Senha' onChange={handleInputChange} value={formValue.confirme || ''} />

                <button type="submit">Confirmar</button>
            </form>

        </>
    );
}