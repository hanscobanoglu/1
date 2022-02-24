import { useFormik } from "formik";
import React, { FunctionComponent, useMemo } from "react";
import { commitMutation, graphql } from "relay-hooks";
import CREATE_AUTHOR from "../../../src/__generated__/CreateAuthorMutation.graphql";

import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import environment from "../../../relay/environment";
import Input from "../Input/Input";

const CreateAuthor: FunctionComponent = () => {
  const initialValues: any = useMemo(() => {
    return {
      authorName: "",
    };
  }, []);

  const shema = useMemo(
    () =>
      Yup.object().shape({
        authorName: Yup.string().required("Bu alan boş bırakılamaz.").max(70),
      }),
    []
  );

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("values", values);
      handleMutation(values.authorName);
    },
    validationSchema: shema,
  });

  const handleMutation = (authorName: string): void => {
    commitMutation(environment, {
      mutation: CREATE_AUTHOR,
      variables: {
        input: {
          authorName,
        },
      },
      onCompleted: (res) => {
        //handleRedirect();
        console.log("RESTEN GELEN VERĞ", res);
        window.location.reload();
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          formikProps={formik}
          name="authorName"
          value={formik.values.name}
        />
        <Button type="submit">Gönder</Button>
      </Form>
    </div>
  );
};
export default CreateAuthor;
