import styles from '/components/cadastrarlivros.module.css'
import { Formik, Form, Field } from 'formik'
import { useRouter } from 'next/router';
import * as Yup from 'yup'
import api from '../pages/api/api';

const onlyNumbers = (e) => e.replace("$", '')
const onlyDate = (e) => e.replace("T00:00:00.000Z", '')
function dataAtual() {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = ano + '-' + mes + '-' + dia;
    return dataAtual
}
const schema = Yup.object().shape({
    titulo: Yup.string()
        .min(2, "Insira um titulo maior")
        .max(50, "Insira um titulo menor")
        .required('Insira um titulo valido'),
    editora: Yup.string()
        .min(4, "Insira um editora maior")
        .max(50, "Insira um editora menor")
        .required('Insira um editora valido'),
    autor: Yup.number()
        .positive("Insira um autor com id positivo")
        .integer("Insira um id inteiro")
        .required("Insira um autor valido"),

    data: Yup.date()
        .max(dataAtual(), "Digite uma data valida")
        .required('Insira uma data valida'),
    preco: Yup.number()
        .positive("Insira um preço positivo")
        .required("Insira um preço valido")
})

export default function Atualiza(props) {


    let router = useRouter();
    async function handleSubmite(formValues) {
        const data = {
            "id": props.id,
            "titulo": formValues.titulo,
            "autor": formValues.autor,
            "editora": formValues.editora,
            "data_publicacao": formValues.data,
            "preco": formValues.preco,


        }
        console.log(data)

        const response = await api.put("/atualizar/livros", data)
        console.log(response);
        router.push('/')
    }



    return (


        <>
            <Formik
                validationSchema={schema}
                initialValues={{
                    titulo: props.titulo,
                    editora: props.editora,
                    autor: props.autor,
                    data: onlyDate(props.data),
                    preco: onlyNumbers(props.preco),



                }}
                onSubmit={handleSubmite}>
                {({ errors, touched }) => (

                    < Form className={styles.Flex}>

                        <div className={styles.container}>
                            <label htmlFor='titulo'>Título</label>
                            <Field id='titulo' name="titulo" type="text" placeholder="Título" />
                            {errors.titulo && touched.titulo && (<span>{errors.titulo}</span>)}
                        </div>
                        <div className={styles.container}>
                            <label htmlFor='editora'>Editora</label>
                            <Field id='editora' name="editora" type="text" placeholder="Editora" />
                            {errors.editora && touched.editora && (<span>{errors.editora}</span>)}
                        </div>
                        <div className={styles.container}>
                            <label htmlFor='autor'>Autor</label>
                            <Field id='autor' name="autor" type="number" placeholder="Autor" />
                            {errors.autor && touched.autor && (<span>{errors.autor}</span>)}
                        </div>

                        <div className={styles.container}>
                            <label htmlFor='data'>Data de Publicação</label>
                            <Field id='data' name="data" type="date" placeholder="Data de Publicação" />
                            {errors.data && touched.data && (<span>{errors.data}</span>)}

                        </div>
                        <div className={styles.container}>
                            <label htmlFor='preco'>Preço</label>
                            <Field name="preco" id='preco' type="number" placeholder="Preço" />
                            {errors.preco && touched.preco && (<span>{errors.preco}</span>)}

                        </div>
                        <button type="submit">Confirmar</button>

                    </Form>
                )}
            </Formik>

        </>
    );
}