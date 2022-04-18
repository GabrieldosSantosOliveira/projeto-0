import styles from '/components/cadastro.module.css'
import { useState } from 'react'

const institution = [{ "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Brasília", "sigla": "IFB" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso", "sigla": "IFMT" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul", "sigla": "IFMS" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Goiás", "sigla": "IFG" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia Goiano", "sigla": "IFGoiano" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Alagoas", "sigla": "IFAL" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia da Bahia", "sigla": "IFBA" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia Baiano", "sigla": "IF Baiano" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Ceará", "sigla": "IFCE" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Maranhão", "sigla": "IFMA" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia da Paraíba", "sigla": "IFPB" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco", "sigla": "IFPE" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão do Pernambuco", "sigla": "IF Sertao PE" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão do Piauí", "sigla": "IFPI" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão do Rio Grande do Norte", "sigla": "IFRN" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Sertão do Rio Grande de Sergipe", "sigla": "IFS" },
{ "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Acre", "sigla": "IFAC" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Amapá", "sigla": "IFAP" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Amazonas", "sigla": "IFAM" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Pará", "sigla": "IFPA" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Rondônia", "sigla": "IFRO" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Tocantins", "sigla": "IFTO" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Roraima", "sigla": "IFRR" },
{ "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Espírito Santo", "sigla": "IFES" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Rio de Janeiro", "sigla": "IFRJ" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia Fluminense", "sigla": "IFF" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais", "sigla": "IFMG" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Norte de Minas Gerais", "sigla": "IFNMG" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste  de Minas Gerais", "sigla": "IFSUDESTEDEMINAS" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Sul  de Minas Gerais", "sigla": "IFUSULDEMINAS" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro", "sigla": "IFTM" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo", "sigla": "IFSP" },
{ "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul", "sigla": "IFRS" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha", "sigla": "IFFarroupilha" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia Sul-Rio-Grandense", "sigla": "IFSUL" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia do Paraná", "sigla": "IFPR" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina", "sigla": "IFSC" }, { "nome": "Instituto Federal de Educação, Ciência e Tecnologia Catarinense", "sigla": "IFC" }]

const instituto = institution.map(valor => {
    return <option value={valor.sigla}>{valor.nome}</option>
})
const profissao = ["Engenharia Agrícola", "Sistemas de Informação", "Física,Zootecnia", "Análise e Desenvolvimento de Sistemas",
    "Português", "Letras", "Matemática", "Análise de Sistemas", "Agronomia", "Educação Física", "Geografia", "Ciências Sociais",
    "Ciência da Computação", "Tecnologia de Processamento de Dados", "Filosofia", "Ciências Biológicas", " Artes Visuais", "Informática/Desenvolvimento Web",
    "Agricultura", "Letras (habilitação em Português/Espanhol)", "História", " Ciências Agrárias/Fitotecnia", "Ciências Agrárias", "Química",
    "Português/Inglês", "Análise de Sistemas", "Administração", "Engenharia de Computação"];
const select = profissao.map(valor => {
    return <option value={valor}>{valor}</option>
})


export default function Cadastro() {

    const [formValue, setFormValue] = useState({})

    const handleSubmite = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }



    // const [nome,setNome] = useState('')
    // const NomeCompleto=(e) =>{
    //    setNome(e.target.value)
    // }
    // const handleSubmite = (e) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.target)
    //     const data = Object.fromEntries(formData)
    //     console.log(data);''
    // }

    return (
        <>

            <form onSubmit={handleSubmite} className={styles.container}>
                <div>Cadastro</div>
                <input type="text" name="username" required aria-label="Nome Completo" placeholder='Nome Completo' onChange={handleSubmite} value={formValue.username || ''} />
                <input type="date" name="date" required aria-label="Data de Nascimento" onChange={handleSubmite} value={formValue.date || ''} />

                <select name='office' onChange={handleSubmite} value={formValue.office || ''}>

                    <option selected hidden>Selecine sua area</option>
                    <option value="Estudante">Estudante</option>
                    <option value="Professor">Professor</option>
                </select>

                <select name='area' onChange={handleSubmite} value={formValue.area || ''}>
                    <option selected hidden>Selecione seu cargo</option>
                    {select}
                </select>
                <select name='institution' onChange={handleSubmite} value={formValue.institution || ''}>
                    <option selected hidden>Selecione seu Instituto</option>

                    {instituto}
                </select>
                <input type="email" name="email" required aria-label="E-mail" placeholder='E-mail' onChange={handleSubmite} value={formValue.email || ''} />
                <input type="password" name="password" required aria-label="Senha " placeholder='Senha' onChange={handleSubmite} value={formValue.password || ''} />
                <input type="password" name="confirme" required aria-label="Confirme Senha" placeholder='Confirme Senha' onChange={handleSubmite} value={formValue.confirme || ''} />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}