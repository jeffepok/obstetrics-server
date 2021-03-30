const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');

router.get('/', verify, (req, res) =>{
    // res.json({
    //     posts: {title: 'first post', description: 'random post'}
    // });
    // res.send(User.findOne({_id: req.user._id}));
    User.findOne({_id: req.user._id}, (err, users)=>{
        if(err) console.log(err)
        else{
            res.send({user: users._id})
        }
    })

});

module.exports = router;
