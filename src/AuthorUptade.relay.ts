import { graphql } from "relay-hooks";



graphql`
  mutation AuthorUptadeMutation($input: UpdateAuthorInput!) {
        uptadeAuthor(input: $input){
          author {
              id
              authorName
          }
      }
  }
`;
