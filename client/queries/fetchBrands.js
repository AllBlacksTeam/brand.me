import gql from 'graphql-tag';

export default gql`
  {
    brands {
      id
      name
      likes
    }
  }
`;
