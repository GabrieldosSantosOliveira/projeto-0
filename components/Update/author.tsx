import styles from './author.module.css';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import { schema } from './../Validation/author';
import api from '../../pages/api/api';
import { Input } from '../Input';
type AutorType = {
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
}: AutorType) {
  let router = useRouter();
  //Função para fazer a atualização dos dados
  async function handleSubmite({
    data,
    nome,
    sobrenome,
    id
  }: any) {
    const dados = {
      id: id,
      nome: nome,
      sobrenome: sobrenome,
      data_nascimento: data
    };
    const response = await api.put('/autor', dados);
    console.log(response);
    router.push('/');
  }
  return (
    <>
      {/* Formulario  com valores iniciais e com errors e touched*/}
      <Formik
        validationSchema={schema}
        initialValues={{
          inputs: [
            {
              label: 'Nome',
              name: 'nome',
              id: 'nome',
              type: 'text',
              placeholder: 'Nome'
            },
            {
              label: 'Sobrenome',
              name: 'sobrenome',
              id: 'sobrenome',
              type: 'text',
              placeholder: 'Sobrenome',
              inicial: 'Gabriel'
            },
            {
              label: 'Data de Nascimento',
              name: 'date',
              id: 'date',
              type: 'date',
              placeholder: 'Data de Nascimento'
            }
          ]
        }}
        onSubmit={handleSubmite}
      >
        {({ errors, touched, values }) => (
          <Form className={styles.container}>
            <Input styles={styles} values={values} />
            <button type="submit">Confirmar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
