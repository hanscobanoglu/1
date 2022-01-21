import { graphql } from "relay-hooks";




graphql`
  mutation CategoryDeleteMutation($input: DeleteCategoryInput!) {
      deleteCategory(input: $input){
        deletedCategoryId
      }
  }
`;
