const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
} = graphql;

const Brand = mongoose.model('brand');

const BrandType = new GraphQLObjectType({
  name:  'BrandType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    likes: { type: GraphQLInt },
    dislikes: { type: GraphQLInt },
  }),
});

module.exports = BrandType;
