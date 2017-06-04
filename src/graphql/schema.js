'use strict';

const GraphQL = require('graphql');

const {
    GraphQLObjectType,
    GraphQLSchema
} = GraphQL;

// import the user query
const PostQuery = require('../queries/Post');

// define a root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'This is the default root query',
    fields: {
        posts: PostQuery.index(),
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
