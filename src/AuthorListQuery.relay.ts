import { graphql } from 'relay-hooks';

graphql`
query AuthorListQuery {
  allAuthor{
    edges{
      node{
        id
        authorName
      }
    }
  }
}
`;

