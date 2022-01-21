import { graphql } from "relay-hooks";



graphql`
  mutation CreateAuthorMutation($input: CreateAuthorInput!) {
    createAuthor(input: $input) {
      author {
        id
        authorName
        bookAuthor {
          id
        }
      }
    }
  }
`;
