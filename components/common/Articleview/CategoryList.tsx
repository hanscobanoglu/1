/* eslint-disable @next/next/link-passhref */
import { useFormik } from "formik";
import Link from "next/link";
import React, { FunctionComponent, useMemo } from "react";
import { commitMutation, STORE_OR_NETWORK, useQuery } from "relay-hooks";
import environment from "../../../relay/environment";
import CATEGORY_QUERY, {
  CategoryListQuery,
} from "../../../src/__generated__/CategoryListQuery.graphql";
import DELETE_CATEGORY from "../../../src/__generated__/CategoryDeleteMutation.graphql";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import CreateCategory from "./CreateCategory";

const CategoryList: FunctionComponent = () => {
  const [open, setOpen] = React.useState(false);

  const allCategory = useQuery<CategoryListQuery>(CATEGORY_QUERY, {
    fetchPolicy: STORE_OR_NETWORK,
  });

  const handleMutation = (id: any): void => {
    commitMutation(environment, {
      mutation: DELETE_CATEGORY,
      variables: {
        input: {
          id,
        },
      },
      onCompleted: (res) => {
        //handleRedirect();
        console.log("RESTEN GELEN VERĞ", res);
        //setOpen(false);
        window.location.reload();
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  return (
    <div className="list-continer">
      <div className="list-wrapper">
        <div className="create-container">
          <br />
          <h3>Create Category</h3>
          <CreateCategory />
        </div>
        <h3>Category List</h3>
        {allCategory.data?.allCategories?.edges.map((item, index) => {
          return (
            <div key={index} className="author-list-component">
              <div className="list-text">{item?.node?.categoryName}</div>
              <div className="list-button">
                <Link
                  href={{
                    pathname: "/blogsite/category-update",
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
                    Kategori Silinsin mi ?
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
export default CategoryList;
