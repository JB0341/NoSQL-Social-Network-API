const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/NoSqlSocial', {
  // useFindAndModify: false,  
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to the NoSQL Social Network database!'))

// Export connection 
module.exports = mongoose.connection;