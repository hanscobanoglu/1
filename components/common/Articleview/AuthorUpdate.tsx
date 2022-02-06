import React, { FunctionComponent, useMemo } from "react";
import router from 'next/router';
import { useQuery,STORE_OR_NETWORK, commitMutation } from "relay-hooks";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from 'yup';

import AUTHOR_SINGLE_QUERY,{ AuthorSingleQuery } from "../../../src/__generated__/AuthorSingleQuery.graphql";
import UPDATE_AUTHOR from "../../../src/__generated__/AuthorUptadeMutation.graphql"
import environment from "../../../relay/environment";

import Input from "../Input/Input";

const AuthorUpdate: FunctionComponent = () => {
  const id = router.query.id || '';
  console.log("Gelen Id",id);
  
  const { data } = useQuery<AuthorSingleQuery>(
    AUTHOR_SINGLE_QUERY,
    { id: id as string },
    { fetchPolicy: STORE_OR_NETWORK },
  );
 
  const initialValues : any = useMemo(() => {
    return {
      authorName: data?.author?.authorName || "" ,      
    };
  }, [data]);

  const shema = useMemo(
    () =>
    Yup.object().shape({
        authorName: Yup.string()
    .required('Bu alan boş bırakılamaz.')
    .max(70),
    }),
    [],
  );

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: values => {
      console.log('values', values);
      handleMutation(values.authorName);
    },
    validationSchema: shema,
  });

  const handleMutation = (authorName: string): void => {
    commitMutation(environment, {
      mutation: UPDATE_AUTHOR,
      variables: {
        input: {
          id,
          authorName,
        },
      },
      onCompleted: (res) => {
       //handleRedirect();
       console.log("RESTEN GELEN VERĞ",res);
       document.location.href = 'author-list'
      },
      onError: (err) => {
        console.log(err);
      },
    })
  };

  return (
    <div>
      <div>
      <Form onSubmit={formik.handleSubmit}>
        <Input 
          formikProps={formik}
          name="authorName"
          value={formik.values.authorName}
          />
        <Button type="submit">Gönder</Button>
      </Form>
      </div>
    </div>
  );
};
export default AuthorUpdate;
