const router = require('express').Router();
let results = require('../models/results.modal');

router.route('/').get((req, res) => {
    results.find()
    .then(results => res.json(results))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const description = req.body.description;
    
    const newResult = new results  ({
        description,
    });
    
    newResult.save()
    .then(() => res.json('Result was added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;