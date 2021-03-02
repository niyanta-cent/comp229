let mongoose = require('mongoose');

// create a model class
let businessContactModel = mongoose.Schema({
    name: String,
    contact: Number,
    email: String,
    location: String
    
},
{
    collection: "business_contacts"
});

module.exports = mongoose.model('BusinessContacts', businessContactModel);