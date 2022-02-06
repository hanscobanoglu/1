import { useFormik } from "formik";
import Link from "next/link";
import React, { FunctionComponent, useMemo } from "react";
import { commitMutation, STORE_OR_NETWORK, useQuery } from "relay-hooks";
import { Button, Header, Icon, Item, Modal } from "semantic-ui-react";
import environment from "../../../relay/environment";
import AUTHOR_QUERY, {
  AuthorListQuery,
} from "../../../src/__generated__/AuthorListQuery.graphql";
import DELETE_AUTHOR from "../../../src/__generated__/AuthorDeleteMutation.graphql";
import CreateAuthor from "./CreateAuthor";

const AuthorList: FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const bookAuthors = useQuery<AuthorListQuery>(AUTHOR_QUERY, {
    fetchPolicy: STORE_OR_NETWORK,
  });

  const handleMutation = (id: any): void => {
    commitMutation(environment, {
      mutation: DELETE_AUTHOR,
      variables: {
        input: {
          id,
        },
      },
      onCompleted: (res) => {
        //handleRedirect();
        console.log("RESTEN GELEN VERĞ", res);
        setOpen(false);
        window.location.reload();
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  //console.log("Liste", bookAuthors);
  return (
    <div className="list-continer">
      <div className="list-wrapper">
        <div className="create-container">
          <br />
          <h3>Create Author</h3>
           <CreateAuthor />
        </div>
      
      <h3>Author List</h3>
      {bookAuthors.data?.allAuthor?.edges.map((item, index) => {
        return (
          <div key={index} className="author-list-component">
            <div className="list-text">
              {item?.node?.authorName}
            </div> 
            <div className="list-button">
            <Link
              href={{
                pathname: "/blogsite/author-update",
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
                Author Silinsin mi ?
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
export default AuthorList;
