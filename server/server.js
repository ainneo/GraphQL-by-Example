//define gql schemea that will describe what our graphql schema will look like
//GQL SCHEMA:
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  # optional bc it is already default
  #   schema {
  #     query: Query
  #   }

  type Query {
    greeting: String #greeting feild
  }
`;

//this funt will be called to resolve our query
//the resolver needs to mirror the schema
const resolvers = {
  Query: {
    greeting: () => "Hello World",
  },
};

//setup/start the server: run node server.js
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen({ port: 9000 });
console.log(`Server running at ${url}`);
//open apollo playground in browser: http://localhost:9000/

//TESTING
//run node server.js in terminal to start the server
// console.log(typeDefs)//test
// console.log(resolvers.Query.greeting()); //test
