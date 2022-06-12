import styles from './book.module.css';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import api from '../../pages/api/api';
import { onlyDate } from '../Utils/cleanDate';
import { DataAtual } from '../Utils/dateNow';
import { onlyNumbers } from '../Utils/cleanPrice';
type DataType = {
  Autor: AutorType[];
  livro: Livro;
};
type AutorType = {
  id: number;
  nome: string;
  sobrenome: string;
  data_nascimento: string;
};
type Livro = {
  id?: number;
  titulo: string;
  autor: number;
  editora: string;
  data_publicacao: string;
  preco: string;
};
type FormType = {
  id?: number;
  titulo: string;
  autor: number;
  editora: string;
  data: string;
  preco: string;
};

// Esquema de validação usando Yup
const schema = Yup.object().shape({
  titulo: Yup.string()
    .min(2, 'Insira um titulo maior')
    .max(50, 'Insira um titulo menor')
    .required('Insira um titulo valido'),
  editora: Yup.string()
    .min(4, 'Insira uma editora maior')
    .max(50, 'Insira uma editora menor')
    .required('Insira uma editora valida'),
  autor: Yup.number()
    .positive('Insira um autor com id positivo')
    .integer('Insira um id inteiro')
    .required('Insira um autor valido'),

  data: Yup.date()
    .max(DataAtual(), 'Digite uma data valida')
    .required('Insira uma data valida'),
  preco: Yup.number()
    .positive('Insira um preço positivo')
    .required('Insira um preço valido')
});

export default function AtualizarLivro({
  Autor,
  livro
}: DataType) {
  const {
    autor,
    data_publicacao,
    editora,
    preco,
    titulo,
    id
  } = livro;
  let router = useRouter();
  //Função para fazer a atualização dos dados
  async function handleSubmite({
    autor,
    data,
    editora,
    preco,
    titulo,
    id
  }: FormType) {
    const dados = {
      id: id,
      titulo: titulo,
      autor: autor,
      editora: editora,
      data_publicacao: data,
      preco: preco
    };
    const response = await api.put('/livros', dados);
    router.push('/posts/mostrarLivro');
  }
  const values = {
    titulo: titulo,
    editora: editora,
    autor: autor,
    data: onlyDate(data_publicacao),
    preco: onlyNumbers(preco)
  };
  return (
    <>
      {/* Formulario  com valores iniciais e com errors e touched*/}
      <Formik
        validationSchema={schema}
        initialValues={values}
        onSubmit={handleSubmite}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <div className={styles.items}>
              <label htmlFor="titulo">Título</label>
              <Field
                id="titulo"
                name="titulo"
                type="text"
                placeholder="Título"
              />
              {errors.titulo && touched.titulo && (
                <span>{errors.titulo}</span>
              )}
            </div>
            <div className={styles.items}>
              <label htmlFor="editora">Editora</label>
              <Field
                id="editora"
                name="editora"
                type="text"
                placeholder="Editora"
              />
              {errors.editora && touched.editora && (
                <span>{errors.editora}</span>
              )}
            </div>
            <div className={styles.items}>
              <label htmlFor="autor">Autor</label>
              <Field
                id="autor"
                name="autor"
                as="select"
                placeholder="Autor"
              >
                {Autor.map(({ id }) => {
                  return (
                    <option value={id} key={id}>
                      {id}
                    </option>
                  );
                })}
              </Field>
              {errors.autor && touched.autor && (
                <span>{errors.autor}</span>
              )}
            </div>

            <div className={styles.items}>
              <label htmlFor="data">
                Data de Publicação
              </label>
              <Field
                id="data"
                name="data"
                type="date"
                placeholder="Data de Publicação"
              />
              {errors.data && touched.data && (
                <span>{errors.data}</span>
              )}
            </div>
            <div className={styles.items}>
              <label htmlFor="preco">Preço</label>
              <Field
                name="preco"
                id="preco"
                type="number"
                placeholder="Preço"
              />
              {errors.preco && touched.preco && (
                <span>{errors.preco}</span>
              )}
            </div>
            <button type="submit">Confirmar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
