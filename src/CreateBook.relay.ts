import { graphql } from "relay-hooks";

graphql`
  mutation CreateBookMutation($input: CreateBookInput!) {
    createBook(input: $input) {
      book {
        id
        bookName
        category {
          id
          categoryName
        }
        author {
          id
          authorName
        }
      }
    }
  }
`;
