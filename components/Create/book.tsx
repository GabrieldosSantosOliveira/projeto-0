import styles from '/components/cadastrarlivro.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import api from '../../pages/api/api';
import { DataAtual } from '../Utils/dateNow';
import { SelectAutor } from '../Input/OptionAutor';
import { Input } from '../Input';

type LivroType = {
  titulo: string;
  autor: number | null;
  editora: string;
  data: string;
  preco: string;
};
type AutorType = {
  autor: [
    {
      id: number;
      nome: string;
      sobrenome: string;
      data_nascimento: string;
    }
  ];
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
    .required('Insira uma editora valido'),
  autor: Yup.number()
    .required('Escolha um Autor')
    .min(0)
    .typeError('Escolha um autor'),
  data: Yup.date()
    .max(DataAtual(), 'Digite uma data valida')
    .required('Insira uma data valida'),
  preco: Yup.number()
    .positive('Insira um preço positivo')
    .required('Insira um preço valido')
});

export default function CadastrarLivro({
  autor
}: AutorType) {
  let router = useRouter();
  //Função para fazer o post de Livro
  async function handleSubmite({
    autor,
    data,
    editora,
    preco,
    titulo
  }: any) {
    const dados = {
      titulo: titulo,
      autor: autor,
      editora: editora,
      data_publicacao: data,
      preco: preco
    };
    const response = await api.post('/livros', dados);
    router.push('/posts/mostrarLivro');
  }

  return (
    <>
      {/* Formulario  com valores iniciais e com errors e touched*/}
      <Formik
        validationSchema={schema}
        initialValues={{
          inputs: [
            {
              label: 'Título',
              name: 'titulo',
              id: 'titulo',
              type: 'text',
              placeholder: 'Título'
            },
            {
              label: 'Editora',
              name: 'editora',
              id: 'editora',
              type: 'text',
              placeholder: 'Editora'
            },
            {
              label: 'Autor',
              name: 'autor',
              id: 'autor',
              type: 'select',
              options: SelectAutor(autor),
              hidden: 'Selecione o Autor'
            },
            {
              label: 'Data de Publicação',
              name: 'data',
              id: 'data',
              type: 'date',
              placeholder: 'Data de Publicação'
            },
            {
              label: 'Preço',
              name: 'preco',
              id: 'preco',
              type: 'number',
              placeholder: 'Preço'
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
