import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { FunctionComponent, useState } from "react";
import { useRouter } from "next/router";

interface Values {
  username: string;
  password: string;
}

const LoginForm: FunctionComponent = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

  return (
    <div className="form-container">
      <div className="form-wrapper">
      <p className="form-text">Welcome</p>
      <h1 className="form-text">Admin Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            if (values.username === "admin" && values.password === "1234") {
              router.push({
                pathname: "/blogsite",
                query: { id: "success" },
              });
            } else {
              setError(true);
            }
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="ui form">
          <div className="field">
            <label>User</label>
            <Field id="username" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>Password</label>
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="form-button">
          <button className="ui inverted green button" type="submit">
            Login
          </button>
          {error ? <div> password veya ıd hatalı </div> : null}
          </div>
        </Form>
      </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
