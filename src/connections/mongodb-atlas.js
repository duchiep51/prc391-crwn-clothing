const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:admin@prc391-crwn-clothing-ap.0qzjt.mongodb.net/crwn-clothing?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connects database successfully!");
  })
  .catch((error) => {
    console.log(error);
  });
