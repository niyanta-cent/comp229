let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');



let businessContactsController = require('../controllers/businesscontacts');

/* GET Route for the Book List page - READ Operation */
router.get('/', businessContactsController.displayContactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add',  businessContactsController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add',  businessContactsController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', businessContactsController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', businessContactsController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', businessContactsController.performDelete);

module.exports = router;