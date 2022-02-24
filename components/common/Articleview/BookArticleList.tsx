/* eslint-disable @next/next/link-passhref */
import { useFormik } from "formik";
import Link from "next/link";
import React, { FunctionComponent, useMemo } from "react";
import { commitMutation, STORE_OR_NETWORK, useQuery } from "relay-hooks";
import CreateDeneme from "./CreateArticle";
import environment from "../../../relay/environment";

import BOOK_QUERY1, {
  BookListQuery,
} from "../../../src/__generated__/BookListQuery.graphql";
import DELETE_BOOK from "../../../src/__generated__/BookDeleteMutation.graphql";
import { Button, Header, Icon, Modal } from "semantic-ui-react";


const BookArticleList: FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const allBooks = useQuery<BookListQuery>(BOOK_QUERY1, {
    fetchPolicy: STORE_OR_NETWORK,
  });

  const handleMutation = (id: any): void => {
    commitMutation(environment, {
      mutation: DELETE_BOOK,
      variables: {
        input: {
          id,
        },
      },
      onCompleted: (res) => {
        window.location.reload();
      },
      onError: (err) => {
        console.log("silme hatası", err);
      },
    });
  };

  return (
    <div className="list-continer">
      <div className="list-wrapper">
        <div className="create-container">
          <br />
          <h3>Create BOOK</h3>
          <CreateDeneme />
        </div>
        <h3>Book List</h3>

        {allBooks.data?.allBooks?.edges.map((item, index) => {
          return (
            <div key={index} className="author-list-component">
              <div className="author-list-wrapper ilk">
                <div className="list-text">
                  Book:
                  <br />
                  {item?.node?.bookName}
                </div>
              </div>
              <div className="author-list-wrapper">
                <div className="list-text">
                  Category:
                  <br />
                  {item?.node?.category?.categoryName}
                </div>
              </div>
              <div className="author-list-wrapper">
                <div className="list-text">
                  Author:
                  <br />
                  {item?.node?.author?.authorName}
                </div>
              </div>
              <div className="list-button">
                <Link
                  href={{
                    pathname: "/blogsite/book-update",
                    query: {
                      id: item?.node?.id,
                    },
                  }}
                >
                  <Button inverted color="blue" icon="edit"></Button>
                </Link>
                <Modal
                  basic
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  size="small"
                  trigger={
                    <Button inverted color="red">
                      Sil
                    </Button>
                  }
                >
                  <Header icon>
                    <Icon name="delete" />
                    Book Silinsin mi ?
                  </Header>
                  <Modal.Actions>
                    <Button
                      basic
                      color="red"
                      inverted
                      onClick={() => setOpen(false)}
                    >
                      <Icon name="remove" /> Hayır
                    </Button>
                    <Button
                      color="green"
                      inverted
                      onClick={() => handleMutation(item?.node?.id)}
                    >
                      <Icon name="checkmark" /> Evet
                    </Button>
                  </Modal.Actions>
                </Modal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BookArticleList;
