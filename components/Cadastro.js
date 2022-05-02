import styles from '/components/cadastro.module.css'
import { Formik, Form, Field } from 'formik'
import { useRouter } from 'next/router';
import NumberFormat from 'react-number-format';
import institutos from "./json/institutos.json"
import curso from "./json/curso.json"
import * as Yup from 'yup'
import axios from 'axios';



const onlyNumbers = (e) => e.replace(/[^0-9]/g, '')

const Input = (props) => (
    <NumberFormat {...props} />
);

const instituto = institutos.map(valor => {
    return <option value={valor.sigla} key={valor.sigla}>{valor.nome}</option>
})
const select = curso.map(valor => {
    return <option value={valor} key={valor}>{valor}</option>
})
function dataAtual() {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = ano + '-' + mes + '-' + dia;
    return dataAtual
}
const schema = Yup.object().shape({
    nome: Yup.string()
        .min(2, "Insira um nome maior")
        .max(70, "Insira um nome menor")
        .required('Insira um nome valido'),
    sobrenome: Yup.string()
        .min(4, "Insira um sobrenome maior")
        .max(70, "Insira um sobrenome menor")
        .required('Insira um sobrenome valido'),
    data: Yup.date()
        .max(dataAtual(), "Digite uma data valida")
        .required('Insira uma data valida'),
})

export default function Cadastro() {


    let router = useRouter();
    async function handleSubmite(formValues) {
        const data = {
            "nome": formValues.nome,
            "sobrenome": formValues.sobrenome,
            "data_nascimento": formValues.data,

        }
        const response = await axios.post("http://localhost:1337/api/users", data)
        console.log(response);
        router.push('/')
    }



    return (


        <>
            <Formik
                validationSchema={schema}
                initialValues={{
                    nome: '',
                    sobrenome: '',
                    lastName: '',
                    data: '',



                }}
                onSubmit={handleSubmite}>
                {({ errors, touched }) => (

                    < Form className={styles.Flex}>

                        <div className={styles.container}>
                            <label htmlFor='nome'>Nome</label>
                            <Field id='nome' name="nome" type="text" placeholder="Nome" />
                            {errors.nome && touched.nome && (<span>{errors.nome}</span>)}
                        </div>
                        <div className={styles.container}>
                            <label htmlFor='sobrenome'>Sobrenome</label>
                            <Field id='sobrenome' name="sobrenome" type="text" placeholder="Sobrenome" />
                            {errors.sobrenome && touched.sobrenome && (<span>{errors.sobrenome}</span>)}
                        </div>

                        <div className={styles.container}>
                            <label htmlFor='data'>Data de Nascimento</label>
                            <Field id='data' name="data" type="date" placeholder="Data de Nascimento" />
                            {errors.data && touched.data && (<span>{errors.data}</span>)}

                        </div>

                        <button type="submit">Confirmar</button>

                    </Form>
                )}
            </Formik>

        </>
    );
}