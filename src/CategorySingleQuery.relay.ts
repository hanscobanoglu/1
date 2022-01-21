import { graphql } from "relay-hooks";

graphql`
  query CategorySingleQuery($id: ID!) {
    category(id: $id) {
      id
      categoryName
    }
  }
`;
