import styles from './author.module.css';
import { Formik, Form, FormikProps } from 'formik';
import { useRouter } from 'next/router';
import { schema } from './../Validation/author';
import api from '../../pages/api/api';
import { Field } from 'formik';
import { onlyDate } from './../Utils/cleanDate';
type AutorType = {
  id?: number;
  nome: string;
  sobrenome: string;
  data: string;
};
interface Values {
  date: string;
  sobrenome: string;
  nome: string;
}

export default function AtualizarAutor({
  data,
  nome,
  sobrenome,
  id
}: AutorType) {
  let router = useRouter();
  //Função para fazer a atualização dos dados
  async function handleSubmite(form: any) {
    console.log('Olá');
    console.log(form);
    const response = await api.put(`/autor/${id}`, form);
    console.log(response);
    router.push('/');
  }
  const inputs = [
    {
      label: 'Nome',
      name: 'nome',
      id: 'nome',
      type: 'text',
      placeholder: 'Nome',
      inicial: nome
    },
    {
      label: 'Sobrenome',
      name: 'sobrenome',
      id: 'sobrenome',
      type: 'text',
      placeholder: 'Sobrenome',
      inicial: sobrenome
    },
    {
      label: 'Data de Nascimento',
      name: 'date',
      id: 'date',
      type: 'date',
      inicial: onlyDate(data),
      placeholder: 'Data de Nascimento'
    }
  ];
  let values = {};
  inputs.map((input) => {
    values[`${input.name}`] = input.inicial;
  });
  return (
    <>
      {/* Formulario  com valores iniciais e com errors e touched*/}
      <Formik
        validationSchema={schema}
        initialValues={values}
        onSubmit={handleSubmite}
      >
        {() => (
          <Form className={styles.container}>
            <Field
              placeholder="Nome"
              label="Nome"
              name="nome"
              type="text"
            />
            <Field
              placeholder="Sobrenome"
              label="Sobrenome"
              name="sobrenome"
              type="text"
            />
            <Field
              placeholder="Data"
              label="Data"
              name="data"
              type="date"
            />

            <button type="submit">Confirmar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
