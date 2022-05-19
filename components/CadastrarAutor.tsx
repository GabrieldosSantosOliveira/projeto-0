import styles from "/components/cadastrarAutor.module.css";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import api from "../pages/api/api";

type Props = {
  nome: string;
  sobrenome: string;
  data: string;
};
// Função verifica se a data digitada é maior que a data atual
function dataAtual() {
  let data = new Date();
  let dia = String(data.getDate()).padStart(2, "0");
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let ano = data.getFullYear();
  let dataAtual = ano + "-" + mes + "-" + dia;
  return dataAtual;
}

// Esquema de validação usando Yup
const schema = Yup.object().shape({
  nome: Yup.string()
    .min(2, "Insira um nome maior")
    .max(70, "Insira um nome menor")
    .required("Insira um nome valido"),
  sobrenome: Yup.string()
    .min(4, "Insira um sobrenome maior")
    .max(70, "Insira um sobrenome menor")
    .required("Insira um sobrenome valido"),
  data: Yup.date()
    .max(dataAtual(), "Digite uma data valida")
    .required("Insira uma data valida"),
});

export default function CadastrarAutor() {
  let router = useRouter();
  //Função para fazer o post de Autor
  async function handleSubmite(formValues: Props) {
    const data = {
      nome: formValues.nome,
      sobrenome: formValues.sobrenome,
      data_nascimento: formValues.data,
    };
    const response = await api.post("/inserir", data);
    console.log(response);
    router.push("/");
  }
  return (
    <>
      {/* Formulario  com valores iniciais e com errors e touched*/}
      <Formik
        validationSchema={schema}
        initialValues={{
          nome: "",
          sobrenome: "",
          lastName: "",
          data: "",
        }}
        onSubmit={handleSubmite}
      >
        {({ errors, touched }) => (
          <Form className={styles.container}>
            <div className={styles.items}>
              <label htmlFor="nome">Nome</label>
              <Field id="nome" name="nome" type="text" placeholder="Nome" />
              {errors.nome && touched.nome && <span>{errors.nome}</span>}
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
              <label htmlFor="data">Data de Nascimento</label>
              <Field
                id="data"
                name="data"
                type="date"
                placeholder="Data de Nascimento"
              />
              {errors.data && touched.data && <span>{errors.data}</span>}
            </div>
            <button type="submit">Confirmar</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
