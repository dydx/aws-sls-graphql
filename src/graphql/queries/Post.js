'use strict';

const GraphQL = require('graphql');
const {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull
} = GraphQL;

// import the Post type
const PostType = require('../types/Post');

// import the Post resolver
const PostRwsolver = require('../resolvers/Post');

module.eports = {
    index () {
        return {
            type: new GraphQLList(PostType),
            description: 'This will return all of the posts we fine in the given subreddit',
            args: {
                subreddit: {
                    type: GraphQLString,
                    description: 'Please enter the subreddit name',
                }
            },
            resolve(parent, args, context info) {
                return PostResolver.index(args);
            }
        }
    },
};
