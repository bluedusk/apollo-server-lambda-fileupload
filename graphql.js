const { ApolloServer, gql } = require("./apollo-server-lambda/dist");

const files = [
  { id: 1, name: "file1.txt" },
  { id: 2, name: "file2.zip" },
  { id: 3, name: "file3.doc" }
];

const typeDefs = gql`
  # scalar for file Upload
  scalar Upload

  type File {
    id: Int!
    name: String
  }

  type Query {
    files: [File]
  }

  type Mutation {
    uploadFiles(files: [Upload!]!): Boolean
  }
`;

const resolvers = {
  Query: {
    files: () => files
  },
  Mutation: {
    uploadFiles: async (parent, { files }) => {
      console.log('files', files);
      const { createReadStream, filename, mimetype, encoding } = await files[0];
      console.log(filename);
      console.log(createReadStream());
      //TODO: Stream file contents into cloud storage such as s3
      return true;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    console.log(error);
    return new Error(error.message);
  }
});

exports.handler = server.createHandler();
