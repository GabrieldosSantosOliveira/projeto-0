import * as Yup from 'yup';
import { DataAtual } from '../Utils/dateNow';

export const schema = Yup.object().shape({
  nome: Yup.string()
    .min(2, 'Insira um nome maior')
    .max(50, 'Insira um nome menor')
    .required('Insira um nome valido'),
  sobrenome: Yup.string()
    .min(2, 'Insira um sobrenome maior')
    .max(50, 'Insira um sobrenome menor')
    .required('Insira um sobrenome valido'),
  data: Yup.date()
    .max(DataAtual(), 'Digite uma data valida')
    .required('Insira uma data valida')
});
