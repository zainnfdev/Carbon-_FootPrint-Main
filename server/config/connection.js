const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://theneoalpha:VikashKaushik@cluster0.cxmotro.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;