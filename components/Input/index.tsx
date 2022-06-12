import { Field, FieldArray, ErrorMessage } from 'formik';
type Values = {
  inputs: {
    label: string;
    name: string;
    id: string;
    type: string;
    placeholder?: string;
    options?: any;
    hidden?: string;
    initial?: string | number;
  }[];
};
type AutorType = [
  {
    id: number;
    nome: string;
    sobrenome: string;
    data_nascimento: string;
  }
];

type Props = {
  values: Values;
  styles: any;
};
export const Input = ({ values, styles }: Props) => {
  return (
    <>
      {values.inputs.map((input, index) => {
        if (input.type === 'text')
          return (
            <div className={styles.items} key={index}>
              <label htmlFor={input.id}>Preço</label>
              <Field
                name={input.name}
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.initial ?? ''}
              />
              <ErrorMessage name={input.name} />
            </div>
          );
        if (input.type === 'date')
          return (
            <div className={styles.items} key={index}>
              <label htmlFor={input.id}>Preço</label>
              <Field
                name={input.name}
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                value={input.initial ?? ''}
              />
              <ErrorMessage name={input.name} />
            </div>
          );
        if (input.type === 'select')
          return (
            <div className={styles.items} key={index}>
              <label htmlFor={input.id}>Preço</label>
              <Field
                name={input.name}
                id={input.id}
                as={input.type}
                value={input.initial ?? ''}
              >
                <option hidden>{input?.hidden}</option>
                {input.options ?? null}
              </Field>
              <ErrorMessage name={input.name} />
            </div>
          );
      })}
    </>
  );
};
