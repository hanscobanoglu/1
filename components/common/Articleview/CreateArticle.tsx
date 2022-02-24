import { useFormik } from "formik";
import React, { FunctionComponent, useMemo } from "react";
import { commitMutation, STORE_OR_NETWORK, useQuery } from "relay-hooks";
import { Button, Form } from "semantic-ui-react";
import * as Yup from "yup";
import environment from "../../../relay/environment";
import CREATE_BOOK from "../../../src/__generated__/CreateBookMutation.graphql";
import AUTHOR_QUERY,{ AuthorListQuery } from "../../../src/__generated__/AuthorListQuery.graphql";
import CATEGORY_QUERY,{ CategoryListQuery } from "../../../src/__generated__/CategoryListQuery.graphql";
import SelectCategory from "../Dropdown/SelectCategory.component";
import Input from "../Input/Input";


const CreateDeneme: FunctionComponent = () => {
  const bookAuthors = useQuery<AuthorListQuery>(AUTHOR_QUERY, {
    fetchPolicy: STORE_OR_NETWORK,
  });
  
  const allCategory = useQuery<CategoryListQuery>(CATEGORY_QUERY, {
    fetchPolicy: STORE_OR_NETWORK,
  });
  
  const authors = useMemo(() => {
    if (bookAuthors && bookAuthors.data) {
      return bookAuthors.data.allAuthor?.edges.map(item => item?.node?.id);
    }
    return [];
  }, [bookAuthors]);
  
  const initialValues: any = useMemo(() => {
    return {
      bookName: "",
      authorName: authors ? authors : "",
      categoryName: "",
    };
  }, [bookAuthors]);

  const shema = useMemo(
    () =>
      Yup.object().shape({
        bookName: Yup.string().required("Bu alan boş bırakılamaz.").max(70),
        authorName: Yup.string(),
        categoryName: Yup.string(),
      }),
    []
  );

  const handleMutation = (values:any): void => {
    console.log(values)
    commitMutation(environment, {
      mutation: CREATE_BOOK,
      variables: {
        input: {
          bookName:values.bookName,
          authorId: values.authorName,
          categoryId: values.categoryName
        },
      },
      onCompleted: (res) => {
       //handleRedirect();
       console.log("RESTEN GELEN VERĞ",res);
       window.location.reload();
   
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleMutation(values);
    },
    validationSchema: shema,
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          formikProps={formik}
          name="bookName"
          value={formik.values.name}
        />
        <SelectCategory 
          formikProps={formik}
          name="authorName"
          data={bookAuthors.data?.allAuthor?.edges}
        />
        <SelectCategory 
          formikProps={formik}
          name="categoryName"
          data={allCategory.data?.allCategories?.edges}
        />
        <Button type="submit">gonder</Button>
      </Form>
    </div>
  );
};
export default CreateDeneme;
