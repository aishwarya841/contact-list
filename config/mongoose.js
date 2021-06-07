const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/contact-list-db");
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error while connection to the database'));
db.once('open',function(){
    console.log("DB is successfull connected");
});
