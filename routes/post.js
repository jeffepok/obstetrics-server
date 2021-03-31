const router = require('express').Router();
const verify = require('./verifyToken');
const {User} = require('../models/User');
const {SocialHistory} = require('../models/SocialHistory');
const {PregnantWoman} = require('../models/PregnantWoman');

router.get('/', verify, (req, res) =>{
    // res.json({
    //     posts: {title: 'first post', description: 'random post'}
    // });
    User.findOne({_id: req.user._id},(err, user) =>{
        if(err) res.send(err);
        else res.send(user);
    })
    // res.send(User.findOne({_id: req.user._id}));
    // User.findOne({_id: req.user._id}, (err, users)=>{
    //     if(err) console.log(err)
    //     else{
    //         res.send({user: users._id})
    //     }
    // });
    // const firstSocialHistory = new SocialHistory({
    //     alcohol: true,
    //     smoking: false
    // });
    //
    // const firstPregnantWoman = new PregnantWoman({
    //     surname: "Kyeremaa",
    //     firstName: "Irene",
    //     socialHistory: firstSocialHistory
    // })
    // firstPregnantWoman.save().then(
    //     (value) => {
    //         res.send(value);
    //     },
    //     (reason) =>{
    //         res.send(reason);
    //     }
    // )

});

module.exports = router;
