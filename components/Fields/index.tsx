import { useField } from 'formik';

type FieldType = {
  name: string;
  id?: string;
  label: string;
  placeholder: string;
  type: string;
};

export const Field = ({ label, ...props }: FieldType) => {
  const [inputProps, meta] = useField(props);
  const id = props.id || props.name;
  return (
    <>
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input {...inputProps} {...props} id={id} />
        {meta.touched && meta.error ? (
          <span>{meta.error}</span>
        ) : null}
      </div>
    </>
  );
};
