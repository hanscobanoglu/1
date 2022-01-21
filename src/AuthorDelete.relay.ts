import { graphql } from "relay-hooks";



graphql`
  mutation AuthorDeleteMutation($input: DeleteAuthorInput!) {
      deleteAuthor(input: $input){
        deletedAuthorId
      }
  }
`;
