import "../styles/styles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register formik page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Name must have a minimum of 2 characters")
            .max(15, "Name must have a maximum of 15 characters")
            .required("Required"),
          email: Yup.string()
            .email("Email format is not valid")
            .required("Required"),
          password1: Yup.string()
            .min(6, "Password must have a minimum of 6 characters")
            .required("Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords don't match")
            .required("Required"),
        })}
      >
        {({ handleReset }) => (
          <Form noValidate>
            <Field type="text" placeholder="Name" name="name" />
            <ErrorMessage name="name" component="span" />

            <Field type="email" placeholder="Email" name="email" />
            <ErrorMessage name="email" component="span" />

            <Field type="password" placeholder="Password" name="password1" />
            <ErrorMessage name="password1" component="span" />

            <Field
              type="password"
              placeholder="Confirm password"
              name="password2"
            />
            <ErrorMessage name="password2" component="span" />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
