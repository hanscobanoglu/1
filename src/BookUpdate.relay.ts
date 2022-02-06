import { graphql } from "relay-hooks";



graphql`
  mutation BookUpdateMutation($input: UpdateBookInput!) {
      updateBook(input: $input){
          book {
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
  }
`;
