const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const WordType = new GraphQLObjectType({
  name: 'WordType',
  fields: {
    term: { type: GraphQLString },
    definition: { type: GraphQLString },
    id: { type: GraphQLID },
    group: { type: GraphQLString }
  }
});

module.exports = WordType;
