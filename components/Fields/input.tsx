import { SelectField } from './select';
import { Field } from './index';
export const InputField = ({ inputs }) => {
  return (
    <>
      {inputs.map((input, index) => {
        if (input.type === 'date' || input.type === 'text')
          return (
            <Field
              placeholder={input.placeholder}
              label={input.label}
              name={input.name}
              type={input.type}
              key={index}
            />
          );
        if (input.type === 'select')
          return (
            <SelectField
              label="Autor"
              name="autor"
              key={index}
              options={input.options}
            />
          );
      })}
    </>
  );
};
