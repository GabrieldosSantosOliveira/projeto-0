import styles from './book.module.css';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import { onlyDate } from '../Utils/cleanDate';
import { onlyNumbers } from '../Utils/cleanPrice';
import { schema } from '../Validation/book';
import api from '../../pages/api/api';
type Data = string;
type Autor = {
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

export default function AtualizarLivro({
  newAutor,
  livro
}: {
  newAutor: Autor[];
  livro: Livro;
}) {
  let router = useRouter();

  //Função para fazer a atualização dos dados
  async function handleSubmite(formValues: FormType) {
    const response = await api.put(
      '/atualizar/livros',
      formValues
    );
    console.log(response);
    router.push(`/livros/${livro.id}`);
  }
  const values = {
    titulo: livro.titulo,
    editora: livro.editora,
    autor: livro.autor,
    data: onlyDate(livro.data_publicacao),
    preco: onlyNumbers(livro.preco)
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
                {newAutor.map((autor) => {
                  return (
                    <option value={autor.id} key={autor.id}>
                      {autor.id}
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
