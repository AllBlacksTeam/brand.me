import gql from 'graphql-tag';

export default gql`
  mutation LikeBrand($id: ID){
    likeBrand(id: $id) {
      id
      likes
    }
  }
`;
