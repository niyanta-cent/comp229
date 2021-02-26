let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const businesscontacts = require('../models/businesscontacts');


// create a reference to the model
let BusinessContacts = require('../models/businesscontacts');

module.exports.displayContactList = (req, res, next) => {
    BusinessContacts.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('businesscontacts/list', 
            {title: 'Business Contacts', 
            BusinessContactList: contactList, 
            displayName: req.user ? req.user.displayName : ''});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('businesscontacts/add', {title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = BusinessContacts({
        "name": req.body.name,
        "contact": req.body.contact,
        "email": req.body.email,
        "location": req.body.location
    });

    BusinessContacts.create(newContact, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    businesscontacts.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businesscontacts/edit', {title: 'Edit Contact', businesscontacts: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = BusinessContacts({
        "_id": id,
        "name": req.body.name,
        "contact": req.body.contact,
        "email": req.body.email,
        "location": req.body.location
    });

    BusinessContacts.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    BusinessContacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/conatact-list');
        }
    });
}