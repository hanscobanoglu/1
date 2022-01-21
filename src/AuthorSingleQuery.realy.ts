import { graphql } from "relay-hooks";

graphql`
  query AuthorSingleQuery($id: ID!) {
    author(id: $id) {
      id
      authorName
    }
  }
`;
