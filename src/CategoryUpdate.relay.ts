import { graphql } from "relay-hooks";



graphql`
  mutation CategoryUpdateMutation($input: UpdateCategoryInput!) {
      updateCategory(input: $input){
          category {
              id
              categoryName
          }
      }
  }
`;
