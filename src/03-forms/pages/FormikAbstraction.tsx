import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "Must be 10 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Must be a valid email")
            .required("Required"),
          terms: Yup.boolean().isTrue("You should accept terms and conditions"),
          jobType: Yup.string()
            .notOneOf(["it-junior"], "This option is not valid")
            .required("Required"),
        })}
      >
        {() => (
          <Form noValidate>
            <MyTextInput
              name="firstName"
              label="First Name"
              placeholder="Your name"
            />

            <MyTextInput
              name="lastName"
              label="Last Name"
              placeholder="Your last name"
            />

            <MyTextInput
              name="email"
              label="Email"
              placeholder="example@example.com"
              type="email"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It senior</option>
              <option value="it-junior">It junior</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
