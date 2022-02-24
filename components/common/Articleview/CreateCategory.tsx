import { useFormik } from "formik";
import React, { FunctionComponent, useMemo } from "react";
import { commitMutation, graphql } from "relay-hooks";

import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import environment from "../../../relay/environment";
import Input from "../Input/Input";
import CREATE_CATEGORY from "../../../src/__generated__/CreateCategoryMutation.graphql";

const CreateCategory: FunctionComponent = () => {
  const initialValues: any = useMemo(() => {
    return {
      categoryName: "",
    };
  }, []);

  const shema = useMemo(
    () =>
      Yup.object().shape({
        categoryName: Yup.string().required("Bu alan boş bırakılamaz.").max(70),
      }),
    []
  );

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("values", values);
      handleMutation(values.categoryName);
    },
    validationSchema: shema,
  });

  const handleMutation = (categoryName: string): void => {
    commitMutation(environment, {
      mutation: CREATE_CATEGORY,
      variables: {
        input: {
          categoryName,
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
          name="categoryName"
          value={formik.values.name}
        />
        <Button type="submit">Gönder</Button>
      </Form>
    </div>
  );
};
export default CreateCategory;
