import styles from '/components/cadastrarlivro.module.css'
import { Formik, Form, Field } from 'formik'
import { useRouter } from 'next/router';
import * as Yup from 'yup'
import api from '../pages/api/api';

// Função verifica se a data digitada é maior que a data atual 
function dataAtual() {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = ano + '-' + mes + '-' + dia;
    return dataAtual
}
// Esquema de validação usando Yup
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

export default function CadastrarLivro() {
    let router = useRouter();
    //Função para fazer o post de Livro
    async function handleSubmite(formValues) {
        const data = {
            "titulo": formValues.titulo,
            "autor": formValues.autor,
            "editora": formValues.editora,
            "data_publicacao": formValues.data,
            "preco": formValues.preco,
        }
        const response = await api.post("/inserir/livros", data)
        console.log(response);
        router.push('/posts/mostrarLivro')
    }

    return (
        <>
            {/* Formulario  com valores iniciais e com errors e touched*/}
            <Formik
                validationSchema={schema}
                initialValues={{
                    titulo: '',
                    editora: '',
                    autor: '',
                    data: '',
                    preco: '',
                }}
                onSubmit={handleSubmite}>
                {({ errors, touched }) => (

                    < Form className={styles.container}>

                        <div className={styles.items}>
                            <label htmlFor='titulo'>Título</label>
                            <Field id='titulo' name="titulo" type="text" placeholder="Título" />
                            {errors.titulo && touched.titulo && (<span>{errors.titulo}</span>)}
                        </div>
                        <div className={styles.items}>
                            <label htmlFor='editora'>Editora</label>
                            <Field id='editora' name="editora" type="text" placeholder="Editora" />
                            {errors.editora && touched.editora && (<span>{errors.editora}</span>)}
                        </div>
                        <div className={styles.items}>
                            <label htmlFor='autor'>Autor</label>
                            <Field id='autor' name="autor" type="number" placeholder="Autor" />
                            {errors.autor && touched.autor && (<span>{errors.autor}</span>)}
                        </div>

                        <div className={styles.items}>
                            <label htmlFor='data'>Data de Publicação</label>
                            <Field id='data' name="data" type="date" placeholder="Data de Publicação" />
                            {errors.data && touched.data && (<span>{errors.data}</span>)}

                        </div>
                        <div className={styles.items}>
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