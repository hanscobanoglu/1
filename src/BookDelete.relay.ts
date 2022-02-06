import { graphql } from "relay-hooks";



graphql`
 mutation BookDeleteMutation($input: DeleteBookInput!){
   deleteBook(input: $input)
   {
    deletedBookId
   }
 }
`;
