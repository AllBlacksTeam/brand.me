const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  name: String,
  likes: { type: Number, default: 0 },
});

BrandSchema.statics.like = (id) => {
  const Brand = mongoose.model('brand');
  return Brand.findById(id)
    .then(brand => {
      brand.likes = brand.likes + 1;
      return brand.save();
    })
};

mongoose.model('brand', BrandSchema);
