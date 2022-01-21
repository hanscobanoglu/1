import { graphql } from "relay-hooks";

graphql` 
mutation CreateCategoryMutation($input:  CreateCategoryInput!) {
  createCategory(input: $input){
    category {
      id
      categoryName
    }
  }
}
`;