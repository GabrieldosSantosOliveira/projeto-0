import styles from './author.module.css';
import { Formik, Form, FieldArray } from 'formik';
import { useRouter } from 'next/router';
import api from '../../pages/api/api';
import { schema } from '../Validation/author';
import { InputField } from '../Fields/input';

// import Post from '../components/Posts/index';
const inputs = [
  {
    label: 'Nome',
    name: 'nome',
    type: 'text',
    placeholder: 'Nome'
  },
  {
    label: 'Sobrenome',
    name: 'sobrenome',
    type: 'text',
    placeholder: 'Sobrenome'
  },
  {
    label: 'Data de Nascimento',
    name: 'date',
    type: 'date',
    placeholder: 'Data de Nascimento'
  }
];

export default function CadastrarAutor() {
  let router = useRouter();
  //Função para fazer o post de Autor
  async function handleSubmite({
    data,
    nome,
    sobrenome
  }: any) {
    const dados = {
      nome: nome,
      sobrenome: sobrenome,
      data_nascimento: data
    };
    const response = await api.post('/autor', dados);
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
          date: ''
        }}
        onSubmit={handleSubmite}
      >
        {({ values }) => (
          <Form className={styles.container}>
            <InputField inputs={inputs} />

            <button type="submit">Confirmar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
