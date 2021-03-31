require('../Data/database');

const express = require('express');
const orderModel = require('../Models/order');
const router = express.Router();



router.get('/', (req, res) => {
    orderModel.find({}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});

router.get('/:id', (req, res) => {
    orderModel.find({ id: req.params.id }, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});




router.post('/addNew', (req, res) => {
    // TODO : VALIDATION
    const order = new orderModel(req.body);
    order.save().then(() => res.send("success"));
});


router.put('/update', (req, res) => {
    orderModel.findOneAndUpdate({ id: req.body.id }, { $set: req.body },
        (err, doc) => {
            err ? res.status(500).send(err) : res.status(200).send('updated!')
        }
    )
});

router.delete('/', (req, res) => {
    orderModel.findOneAndDelete({ id: req.body.id }, (err) => {
        err ? res.status(500).send(err) : res.status(200).send('deleted!')
    })
});

module.exports = router;