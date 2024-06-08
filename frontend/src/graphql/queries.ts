import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks($search: String!) {
    books(search: $search) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;