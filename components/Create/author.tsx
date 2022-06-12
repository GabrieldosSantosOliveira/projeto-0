import styles from './author.module.css';
import {
  Formik,
  Form,
  Field,
  FieldArray,
  ErrorMessage
} from 'formik';
import { useRouter } from 'next/router';
import api from '../../pages/api/api';
import { schema } from '../Validation/author';
import { Input } from '../Input';
import { SelectAutor } from '../Input/OptionAutor';
// import Post from '../components/Posts/index';

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
              placeholder: 'Sobrenome'
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
        {({ values }) => (
          <Form className={styles.container}>
            <FieldArray name="input" render={() => <></>} />
            <button type="submit">Confirmar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
