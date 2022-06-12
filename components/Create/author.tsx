import styles from './author.module.css';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import { schema } from '../Validation/author';
import * as Yup from 'yup';
import api from '../../pages/api/api';

type Props = {
  nome: string;
  sobrenome: string;
  data: string;
};

export default function CadastrarAutor() {
  let router = useRouter();
  //Função para fazer o post de Autor
  async function handleSubmite({
    data,
    nome,
    sobrenome
  }: Props) {
    const dados = {
      nome,
      sobrenome,
      data_nascimento: data
    };
    const response = await api.post('/autor', dados);
    console.log(response);
    router.push('/');
  }
  return (
    <>
      {/* Formulario  com valores iniciais e com errors e touched*/}
      <Formik
        validationSchema={schema}
        initialValues={{
          nome: '',
          sobrenome: '',
          data: ''
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
                placeholder="Data de Nascimento"
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
