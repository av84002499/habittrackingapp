const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin-deen:fatherlordozai@cluster0.asaf9.mongodb.net/userDB';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => {
  console.log("MongoDB Connectedâ€¦")
})
.catch(err => console.log(err))

const database = mongoose;

module.exports = database;