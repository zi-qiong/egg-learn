module.exports = app => {
    const mongoose = app.mongoose;
    
    const Schema = mongoose.Schema;
   
    const UserSchema = new Schema({
      x: String,
    });
   
    return mongoose.model('User', UserSchema);
  }