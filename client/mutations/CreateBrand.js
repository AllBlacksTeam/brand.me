import gql from 'graphql-tag';

export default gql`
  mutation CreateBrand($name: String) {
    createBrand(name: $name) {
      id
      name
      likes
    }
  }
`;
