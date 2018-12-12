module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PartnerSchema = new Schema({
    name: String,
    cover: String,
    slug: String
  });
  return mongoose.model('Partner', PartnerSchema);
}