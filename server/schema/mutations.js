const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');

const BrandType = require('./brand_type');

const Brand = mongoose.model('brand');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createBrand: {
      type: BrandType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parentValue, { name }) {
        return (new Brand({name})).save();
      }
    },
    likeBrand: {
      type: BrandType,
      args: { id: { type: GraphQLID }},
      resolve(parentValue, { id }) {
        return Brand.like(id);
      },
    },
    dislikeBrand: {
      type: BrandType,
      args: { id: { type: GraphQLID }},
      resolve(parentValue, { id }) {
        return Brand.dislike(id);
      },
    },
  },
});

module.exports = mutation;
