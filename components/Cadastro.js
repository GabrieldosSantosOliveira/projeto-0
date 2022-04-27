import styles from '/components/cadastro.module.css'
import { Formik, Form, Field } from 'formik'
import { useRouter } from 'next/router';
import NumberFormat from 'react-number-format';
import institutos from "./json/institutos.json"
import curso from "./json/curso.json"
import * as Yup from 'yup'
import api from '../pages/api/api.js'
import { validateBr } from 'js-brasil';

const Input = (props) => (
    <NumberFormat {...props} />
);

const instituto = institutos.map(valor => {
    return <option value={valor.sigla} key={valor.sigla}>{valor.nome}</option>
})
const select = curso.map(valor => {
    return <option value={valor} key={valor}>{valor}</option>
})

const schema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Insira um nickname maior")
        .max(70, "Insira um nickname menor")
        .required('Insira um nickname valido'),
    firstName: Yup.string()
        .min(2, "Insira um nome maior")
        .max(70, "Insira um nome menor")
        .required('Insira um nome valido'),
    lastName: Yup.string()
        .min(4, "Insira um sobrenome maior")
        .max(70, "Insira um sobrenome menor")
        .required('Insira um sobrenome valido'),
    data: Yup.string()
        .min(1, "Data invalida")
        .required('Insira uma data valida'),

    cargo: Yup.string().required('Escolha uma opção de ocupação'),
    formacao: Yup.string().required('Escolha uma opção de formação'),
    instituto: Yup.string().required('Escolha uma opção de instituição'),
    email: Yup.string()
        .email("Informe um email valido com @, provedor e nome")
        .min(13, "Complete o campo(E-mail pequeno)")
        .max(60, "Complete o campo(E-mail muito grade)")
        .required('Informe um email valido'),
    cpf: Yup.string()
        .required('Insira um cpf valido'),
    password: Yup.string()
        .min(3, "Senha muito pequena")
        .max(10, "Senha muito pequena")
        .required('Escolha uma senha valida'),

})
export default function Cadastro() {
    function checarData(data) {
        let error
        console.log(data)
        if (validateBr.data(data)) {
            error = ""
        } else {
            error = "Insira um numero valido"
        }
        console.log(error)
        return error;


    }
    function checarCpf(data) {
        let error
        console.log(data)
        if (validateBr.cpf(data)) {
            error = ""
            console.log(true)

        } else {
            error = "Insira um numero valido"
            console.log(false)
        }
        console.log(error)
        return error;


    }



    async function handleSubmite(formValues) {
        const date = {
            "username": formValues.username,
            "firstName": formValues.firstName,
            "lastName": formValues.lastName,
            "email": formValues.email,
            "confirmed": true,
            "data": formValues.data,
            "cpf": formValues.cpf,
            "ocupa": formValues.ocupa,
            "formacao": formValues.formacao,
            "instituto": formValues.instituto,
            "password": formValues.password,

        }

        const response = await api.post("/api/users", date)
        console.log(response)
        router.push("/posts/login")

    }

    return (


        <>
            <Formik
                validationSchema={schema}
                initialValues={{
                    username: '',
                    firstName: '',
                    lastName: '',
                    data: '',
                    cargo: '',
                    formacao: '',
                    instituto: '',
                    cpf: '',
                    password: '',
                    email: '',


                }}
                onSubmit={handleSubmite}>
                {({ errors, touched, isValidating }) => (

                    < Form className={styles.Flex}>

                        <div className={styles.container}>
                            <label htmlFor='username'>Nickname</label>
                            <Field id='username' name="username" type="text" placeholder="Nome Completo" />
                            {errors.username && touched.username && (<span>{errors.username}</span>)}
                        </div>
                        <div className={styles.container}>
                            <label htmlFor='firstName'>Nome</label>
                            <Field id='firstName' name="firstName" type="text" placeholder="Nome Completo" />
                            {errors.firstName && touched.firstName && (<span>{errors.firstName}</span>)}
                        </div> <div className={styles.container}>
                            <label htmlFor='lastName'>Sobrenome</label>
                            <Field id='lastName' name="lastName" type="text" placeholder="Nome Completo" />
                            {errors.lastName && touched.lastName && (<span>{errors.lastName}</span>)}
                        </div>

                        <div className={styles.container}>
                            <label htmlFor='data'>Data de Nascimento</label>

                            <Field id='data' name="data" as={Input} format="##/##/####" placeholder="DD/MM/YYYY" mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']} validate={checarData} />
                            {errors.data && touched.data && (<span>{errors.data}</span>)}

                        </div>
                        <div className={styles.container}>
                            <label htmlFor='cargo'>Selecione sua Ocupação</label>
                            <Field id="cargo" name="cargo" as="select">
                                <option hidden>Selecione sua ocupação</option>
                                <option value="Estudante">Estudante</option>
                                <option value="Professor">Professor</option>

                            </Field>
                            {errors.cargo && touched.cargo && (<span>{errors.cargo}</span>)}

                        </div>
                        <div className={styles.container}>
                            <label htmlFor='formacao'>Selecione sua Formação</label>
                            <Field id="formacao" name="formacao" as="select">
                                <option hidden>Selecione sua formação</option>
                                {select}
                            </Field>
                            {errors.formacao && touched.formacao && (<span>{errors.formacao}</span>)}

                        </div>
                        <div className={styles.container}>
                            <label htmlFor='instituto'>Selecione seu Instituto</label>
                            <Field id="instituto" name="instituto" as="select">
                                <option hidden>Selecione sua instituição</option>
                                {instituto}
                            </Field>
                            {errors.instituto && touched.instituto && (<span>{errors.instituto}</span>)}

                        </div>


                        <div className={styles.container}>
                            <label htmlFor='cpf'>CPF</label>
                            <Field name="cpf" id='cpf' as={Input} format="###.###.###-##" placeholder="999.999.999-99" mask={['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']} validate={checarCpf} />
                            {errors.cpf && touched.cpf && (<span>{errors.cpf}</span>)}

                        </div>
                        <div className={styles.container}>
                            <label htmlFor='email'>E-mail</label>
                            <Field id='email' name="email" type="text" placeholder="E-mail" />
                            {errors.email && touched.email && (<span>{errors.email}</span>)}
                        </div>
                        <div className={styles.container}>
                            <label htmlFor='password'>Senha</label>
                            <Field id='password' name="password" type="password" placeholder="Senha" />
                            {errors.password && touched.password && (<span>{errors.password}</span>)}
                        </div>
                        <button type="submit">Confirmar</button>

                    </Form>
                )}
            </Formik>

        </>
    );
}