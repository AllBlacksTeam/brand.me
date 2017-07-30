const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList } = graphql;

const BrandType = require('./brand_type');
const Brand = mongoose.model('brand');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    brands: {
      type: new GraphQLList(BrandType),
      resolve() {
        return Brand.find({});
      }
    }
  }),
});

module.exports = RootQuery;
