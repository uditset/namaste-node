export const typeDefs = `
#graphql

type Author {
    name: String!
    id: ID!
    phoneNum: String
    books: [Book]
}

type Book {
    id: ID!
    name: String!
    publishDate: String!
    author: Author
}

type Query {
    authors: [Author]
    books: [Book]
}

type Mutation {
    addBook(name: String! , publishDate: String! , authorId: ID!): Book!
}

`;