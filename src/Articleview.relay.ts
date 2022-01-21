import { graphql } from 'relay-hooks';



graphql`
query ArticleviewQuery {
  allBooks{
    edges{
      node{
        id
        bookName
      }
    }
  }
}
`;


