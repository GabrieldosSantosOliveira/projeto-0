import styles from './author.module.css';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import api from '../../pages/api/api';
import { schema } from '../Validation/author';
import { onlyDate } from './../Utils/cleanDate';
type Data = string;
type Props = {
  id?: number;
  nome: string;
  sobrenome: string;
  data: string;
};

export default function AtualizarAutor({
  data,
  nome,
  sobrenome,
  id
}: Props) {
  let router = useRouter();
  //Função para fazer a atualização dos dados
  async function handleSubmite(formValues: Props) {
    const response = await api.put(
      `/autor/${id}`,
      formValues
    );
    router.push('/');
  }
  return (
    <>
      {/* Formulario  com valores iniciais e com errors e touched*/}
      <Formik
        validationSchema={schema}
        initialValues={{
          nome: nome,
          sobrenome: sobrenome,
          data: onlyDate(data)
        }}
        onSubmit={handleSubmite}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <div className={styles.items}>
              <label htmlFor="nome">Nome</label>
              <Field
                id="nome"
                name="nome"
                type="text"
                placeholder="Nome"
              />
              {errors.nome && touched.nome && (
                <span>{errors.nome}</span>
              )}
            </div>
            <div className={styles.items}>
              <label htmlFor="sobrenome">Sobrenome</label>
              <Field
                id="sobrenome"
                name="sobrenome"
                type="text"
                placeholder="Sobrenome"
              />
              {errors.sobrenome && touched.sobrenome && (
                <span>{errors.sobrenome}</span>
              )}
            </div>
            <div className={styles.items}>
              <label htmlFor="data">
                Data de Nascimento
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

            <button type="submit">Confirmar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
