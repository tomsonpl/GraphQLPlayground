import gql from 'graphql-tag';

export default gql`
  {
    word {
      term
      definition
      group
    }
  }
`;
