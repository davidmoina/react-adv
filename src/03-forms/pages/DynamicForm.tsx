import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [x: string]: any } = {};
const validatedFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("This field is required");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `${input.label} must have a minimum of ${
          (rule as any).value || 2
        } characters`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Email format is not valid");
    }
  }

  validatedFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...validatedFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      {}

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (
                type === "input" ||
                type === "password" ||
                type === "text" ||
                type === "email"
              ) {
                return (
                  <MyTextInput
                    key={name}
                    name={name}
                    type={type as any}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }

              if (type === "select") {
                return (
                  <MySelect key={name} name={name} label={label}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, name }) => (
                      <option value={id}>{name}</option>
                    ))}
                  </MySelect>
                );
              }

              throw new Error(`Type ${type} not supported`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
