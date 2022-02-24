import { graphql } from "relay-hooks";

graphql`
  query BookSingleQuery($id: ID!) {
    book(id: $id) {
      id
      bookName
      category{
        id
        categoryName
      }
      author{
        id
        authorName
      }
    }
  }
`;
