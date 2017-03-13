import gql from 'graphql-tag';

export default gql`
  {
    word {
      term
      description
      group
    }
  }
`;
