import React from 'react';
import {
  useField,
  Form,
  FormikProps,
  Formik
} from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const MyTextField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Example = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        email: '',
        firstName: 'red',
        lastName: ''
      }}
      onSubmit={(e) => console.log(e)}
    >
      {(props: FormikProps<Values>) => (
        <Form>
          <MyTextField
            name="firstName"
            type="text"
            label="First Name"
          />
          <MyTextField
            name="lastName"
            type="text"
            label="Last Name"
          />
          <MyTextField
            name="email"
            type="email"
            label="Email"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);
export default Example;
