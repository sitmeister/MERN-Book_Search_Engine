import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(($bookData: BookInput!): User) {
    saveBook(authors: $authors,
        description: $description,
        title: $title,
        bookId: $bookId,
        image: $image,
        link: $link) {
            bookId
            authors
            description
            image
            link
            title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;


// import { gql } from '@apollo/client';


// export const LOGIN_USER = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const ADD_USER = gql`
//   mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

// export const SAVE_BOOK = gql`
//   mutation saveBook($authors:[String]!, $bookId: ID!, $title: String!, $description: String!, $image: String!,$link: String!) {
//     saveBook(authors: $authors ,description: $description, title: $title,bookId: $bookId,image: $image, link: $link
// ) {
//     _id
//     username
//     email
//     bookCount
//    savedBooks {
//       bookId
//       title
//       description
//       image
//       link
//       authors
//       }
//     }
    
//   }
// `;


// export const REMOVE_BOOK = gql`
//   mutation removeBook( $bookId: ID!) {
//     removeBook(bookId: $bookId) {
//     _id
//     username
//     email
//     bookCount
//    savedBooks {
//       bookId
//       title
//       description
//       image
//       link
//       authors
//       }
//     }
    
//   }
// `;