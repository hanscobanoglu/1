import React, { FunctionComponent, useMemo } from "react";
import router, { useRouter } from 'next/router';
import { useQuery,STORE_OR_NETWORK, commitMutation } from "relay-hooks";

import CATEGORY_SINGLE_QUERY,{ CategorySingleQuery } from "../../../src/__generated__/CategorySingleQuery.graphql";
import { Button, Form } from "semantic-ui-react";
import Input from "../Input/Input";
import UPDATE_CATEGORY from "../../../src/__generated__/CategoryUpdateMutation.graphql"
import { useFormik } from "formik";
import * as Yup from 'yup';
import environment from "../../../relay/environment";

const CategoryUpdate: FunctionComponent = () => {
  const id = router.query.id || '';
  console.log("Gelen Id",id);

  const { data } = useQuery<CategorySingleQuery>(
    CATEGORY_SINGLE_QUERY,
    { id: id as string },
    { fetchPolicy: STORE_OR_NETWORK },
  );

  const initialValues :any = useMemo(() => {
    return{
      categoryName: data?.category?.categoryName || "",
    };
  }, [data]);

  const shema =useMemo(
    () =>
    Yup.object().shape({
      categoryName: Yup.string()
      .required('Bu alan boş bırakılamaz')
      .max(70),
    }),
    [],
  );

  const formik = useFormik({
    initialValues,
    enableReinitialize:true,
    onSubmit : values => {
      console.log("values", values);
      handleMutation(values.categoryName);
    },
    validationSchema: shema,
  });
  const handleMutation = (categoryName: string): void =>{
    commitMutation(environment, {
      mutation: UPDATE_CATEGORY,
      variables: {
        input: {
          id,
          categoryName
        },
      },
      onCompleted: (res) => {
        //handleRedirect();
        console.log("RESTEN GELEN VERĞ",res);
        document.location.href = 'category-list'
       },
       onError: (err) => {
         console.log(err);
      }
    })
  };
 
  return (
    <div>
      <div>
      <Form onSubmit={formik.handleSubmit}>
        <Input 
          formikProps={formik}
          name="categoryName"
          value={formik.values.categoryName}
          />
        <Button type="submit">Gönder</Button>
      </Form>
      </div>
    </div>
  );
};
export default CategoryUpdate;
