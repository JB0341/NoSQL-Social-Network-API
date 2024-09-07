const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('', {
  // useFindAndModify: false,  
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Export connection 
module.exports = mongoose.connection;