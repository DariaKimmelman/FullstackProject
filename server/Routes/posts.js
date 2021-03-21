require('../Data/database');

const express = require('express');
const postModel = require('../Models/post');
const router = express.Router();



router.get('/', (req, res) => {
    postModel.find({}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});

router.get('/:id', (req, res) => {
    postModel.find({ id: req.params.id }, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});




router.post('/addNew', (req, res) => {
    // TODO : VALIDATION
    const post = new postModel(req.body);
    post.save().then(() => res.send("success"));
});


router.put('/update', (req, res) => {
    postModel.findOneAndUpdate({ id: req.body.id }, { $set: req.body },
        (err, doc) => {
            err ? res.status(500).send(err) : res.status(200).send('updated!')
        }
    )
});

router.delete('/', (req, res) => {
    postModel.findOneAndDelete({ id: req.body.id }, (err) => {
        err ? res.status(500).send(err) : res.status(200).send('deleted!')
    })
});

module.exports = router;