import * as Yup from 'yup';
import { DataAtual } from '../Utils/dateNow';
export const schema = Yup.object().shape({
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
