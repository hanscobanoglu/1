import { graphql } from 'relay-hooks';

graphql`
query CategoryListQuery {
  allCategories{
    edges{
      node{
        id
        categoryName
      }
    }
  }
}
`;

