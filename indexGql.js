import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphQl/typedef.js";
import { resolvers } from "./graphQl/resolvers.js";

//creating appolo server with the query/types and resolver
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const {url} = startStandaloneServer(server,{
    listen: {port: 4000},
});

//http://localhost:4000/ - hit this url and graphql playground will get open
console.log(url);

//Example 1 :

//structure
// books {
//     id,
//     title,
//     publishedYear,
//     author,
// }

// author {
//     authorName,
//     phoneNum,
//     books,
// }

// //queries:
// All books available , All books including their author details , all authors , all authors including the 
// books they have WritableStreamDefaultController.