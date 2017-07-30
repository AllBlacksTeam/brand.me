import gql from 'graphql-tag';

export default gql`
  mutation DislikeBrand($id: ID) {
    dislikeBrand(id: $id) {
      id
      dislikes
    }
  }
`;
