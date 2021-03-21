require('../Data/database');

const express = require('express');
const userModel = require('../Models/user');
const router = express.Router();



router.get('/', (req, res) => {
    userModel.find({}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});

router.get('/:id', (req, res) => {
    userModel.find({ id: req.params.id }, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});




router.post('/addNew', (req, res) => {
    // TODO : VALIDATION
    const user = new userModel(req.body);
    user.save().then(() => res.send("success"));
});


router.put('/update', (req, res) => {
    userModel.findOneAndUpdate({ id: req.body.id }, { $set: req.body },
        (err, doc) => {
            err ? res.status(500).send(err) : res.status(200).send('updated!')
        }
    )
});

router.delete('/', (req, res) => {
    userModel.findOneAndDelete({ _id: req.body.id }, (err) => {
        err ? res.status(500).send(err) : res.status(200).send('deleted!')
    })
});

module.exports = router;