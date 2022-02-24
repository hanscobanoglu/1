import React, { FunctionComponent, useMemo } from "react";
import router, { useRouter } from "next/router";
import { useQuery, STORE_OR_NETWORK, commitMutation } from "relay-hooks";
import { Button, Form } from "semantic-ui-react";
import Input from "../Input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import environment from "../../../relay/environment";

import UPDATE_BOOK from "../../../src/__generated__/BookUpdateMutation.graphql";
import BOOK_SINGLE_QUERY, {
  BookSingleQuery,
} from "../../../src/__generated__/BookSingleQuery.graphql";
import SelectCategory from "../Dropdown/SelectCategory.component";
import AUTHOR_QUERY1, {
  AuthorListQuery,
} from "../../../src/__generated__/AuthorListQuery.graphql";
import CATEGORY_QUERY1, {
  CategoryListQuery,
} from "../../../src/__generated__/CategoryListQuery.graphql";

const BookUpdate: FunctionComponent = () => {
  const id = router.query.id || "";
  //console.log("Gelen Id",id);

  const bookAuthors = useQuery<AuthorListQuery>(AUTHOR_QUERY1, {
    fetchPolicy: STORE_OR_NETWORK,
  });

  const allCategory = useQuery<CategoryListQuery>(CATEGORY_QUERY1, {
    fetchPolicy: STORE_OR_NETWORK,
  });

  const { data } = useQuery<BookSingleQuery>(
    BOOK_SINGLE_QUERY,
    { id: id as string },
    { fetchPolicy: STORE_OR_NETWORK }
  );

  const initialValues: any = useMemo(() => {
    return {
      bookName: data?.book?.bookName || "",
      categoryName: data?.book?.category?.categoryName || "",
      authorName: data?.book?.author?.authorName || "",
    };
  }, [data]);
  const shema = useMemo(
    () =>
      Yup.object().shape({
        bookName: Yup.string(),
        categoryName: Yup.string(),
        authorName: Yup.string().required("Bu alan boş bırakılamaz").max(70),
      }),
    []
  );

  const handleMutation = (values: any): void => {
    commitMutation(environment, {
      mutation: UPDATE_BOOK,
      variables: {
        input: {
          id,
          bookName: values.bookName,
          categoryId: values.categoryName,
          authorId: values.authorName,
        },
      },
      onCompleted: (res) => {
        //handleRedirect();
        document.location.href = "/../blogsite";
      },
      onError: (err) => {
        console.log("Hata Aldın :", err);
      },
    });
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("VALUES", values);
      handleMutation(values);
    },
    validationSchema: shema,
  });
  console.log();
  return (
    <div>
      <div>
        <Form onSubmit={formik.handleSubmit}>
          <Input
            formikProps={formik}
            name="bookName"
            value={formik.values.bookName}
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
          <Button type="submit">Gönder</Button>
        </Form>
      </div>
    </div>
  );
};
export default BookUpdate;
