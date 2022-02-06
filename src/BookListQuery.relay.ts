import { graphql } from 'relay-hooks';

graphql`
query BookListQuery {
  allBooks{
    edges{
      node{
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
}
`;

