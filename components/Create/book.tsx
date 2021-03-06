import styles from './book.module.css';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { schema } from '../Validation/book';
import api from '../../pages/api/api';
import { GetStaticProps } from 'next';

type Props = {
  titulo: string;
  autor: number;
  editora: string;
  data: string;
  preco: string;
};
export type Autor = {
  id: number;
  nome: string;
  sobrenome: string;
  data_nascimento: string;
};

export default function CadastrarLivro({
  autor
}: {
  autor: Autor[];
}) {
  let router = useRouter();
  //Função para fazer o post de Livro
  async function handleSubmite(formValues: Props) {
    const data = {
      titulo: formValues.titulo,
      autorId: formValues.autor,
      editora: formValues.editora,
      data_publicacao: formValues.data,
      preco: formValues.preco
    };
    console.log(data);
    const response = await api.post('/livros', data);
    console.log(response);
    router.push('/book/view');
  }
  return (
    <>
      {/* Formulario  com valores iniciais e com errors e touched*/}
      <Formik
        validationSchema={schema}
        initialValues={{
          titulo: '',
          editora: '',
          autor: 0,
          data: '',
          preco: ''
        }}
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
              <Field id="autor" name="autor" as="select">
                {autor.map((autor) => {
                  return (
                    <option value={autor.id} key={autor.id}>
                      {autor.id} : {autor.nome}
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
