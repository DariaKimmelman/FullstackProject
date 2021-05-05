require('../Data/database');
const bcrypt = require('bcrypt');
const express = require('express');
const userModel = require('../Models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');


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


router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).send('ALL FIELDS ARE REQUIRED!')
        return;
    }
    const extraHash = "#$2w33fsd32fgs$#@WEFS%$#^RTGDFgDHFJ%^";
    userModel.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (!user) {
                res.status(400).send('LOGIN FAILED!');
            } else {
                const userPass = (extraHash + req.body.password).toLowerCase();
                bcrypt.compare(userPass, user.password, (err, result) => {
                    // if (err) { throw err; }
                    if (result) {
                        let payload = { subject: user._id };
                       let token = jwt.sign(payload, 'secretKey');
                       res.status(200).send({ message: 'success', token:token, user:user });
                    } else {
                        res.status(400).send('LOGIN FAILED!');
                    }
                })
            }
        }

    })
})

router.post('/addNew', async(req, res) => {
    if (!req.body.email || req.body.password.length < 8 || !req.body.fname || !req.body.lname) {
        res.status(400).send('ALL FIELDS ARE REQUIRED!')
        return;
    }
    if(!req.body.email.includes('@')){
        res.status(400).send('INVALID EMAIL ADDRESS')
        return;

    } 
    let user1 = await userModel.findOne({ email: req.body.email }).exec();
    if(!user1){
        
    const extraHash = "#$2w33fsd32fgs$#@WEFS%$#^RTGDFgDHFJ%^";
    let userData = req.body;
    const userPass = (extraHash + req.body.password).toLowerCase();
    bcrypt.hash(userPass, 10, (err, hash) => {
        let user = new userModel( {...userData, password: hash, favourites:[], votes:[], isAdmin:false});
        user.save((err, registeredUser) => {
            if (err) {
                res.status(500).send('error: ' +err)
            } else {
                let payload = { subject: registeredUser._id };
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({ message: "User is added", user: registeredUser, token: token });
            }
        })
    })
}
else{
    res.status(400).send('User already exists');
}})


router.put('/update', (req, res) => {
    userModel.findOneAndUpdate({ _id: req.body._id }, { $set: req.body },
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