import { useField } from 'formik';

type FieldType = {
  name: string;
  id?: string;
  label: string;
  options?: any;
};
export const SelectField = ({
  label,
  ...props
}: FieldType) => {
  const [field, meta] = useField(props);
  const id = props.id || props.name
  return (
    <>
      <div>
        {label && (
          <label htmlFor={id }>{label}</label>
        )}
        <select {...field} {...props} id={id}>
          {props?.options}
        </select>

        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};
