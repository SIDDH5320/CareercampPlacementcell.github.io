//import all required packages 
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Placement_cell', { useNewUrlParser: true, useUnifiedTopology: true });

//sets up the mongodb cloud url
MongoURL = process.env.MONGO_URL;

//connect to app to mongodb
mongoose.connect(MongoURL)
.then(()=>console.log('DB Connected Sucessfully'))
.catch((err)=>console.log(`Connetion Error in Mongodb ${err}`));

