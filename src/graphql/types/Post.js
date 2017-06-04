'use strict';

const GraphQL = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} = GraphQL;

const PostType = new GraphQL.GraphQLObjectType({
    name: 'Post',
    description: 'Post Type, for all the posts present in Reddit.',

    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'ID of the post'
        },
        title: {
            type: GraphQLString,
            description: 'Title of the post'
        },
        url: {
            type: GraphQLString,
            description: 'URL of the post'
        },
        author: {
            type: GraphQLString,
            description: 'Name of the Author of the post'
        },
        ups: {
            type: GraphQLInt,
            description: 'Number of Upvotes for the post'
        },
        downs: {
            type: GraphQLInt,
            description: 'Number of Downvotes for the post'
        },
        content: {
            type: GraphQLString,
            description: 'Markdown content of the post'
        }
    })
});

module.exports = PostType;
