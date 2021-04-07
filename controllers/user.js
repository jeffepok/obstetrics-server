const {User} = require('../models/User');
const jwt = require('jsonwebtoken');
const {registeredValidation, loginValidation} = require('../validation')
const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) =>{

        //Lets validate the data before we make a user
        const {error} = registeredValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Checking if the user is already in the database
        const emailExist = await User.findOne({email: req.body.email});
        if(emailExist) return res.status(400).send("Email already exists");

        // Hash passwords
        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hashedPassword) =>{

            //Create a new user
            const user = new User({
                email: req.body.email,
                password: hashedPassword
            });
            user.save().then(
                (value) =>{
                    res.send({user: user._id});
                },
                (err) => res.status(400).send(err));
        });


    },
    login: async(req, res) =>{
        //Lets validate the data before we make a user
        const {error} = loginValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message)

        //Checking if the user is already in the database
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send("Email doesn't exist");
//   Checking if Password is correct
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send("Invalid password");

        //Create and assign a token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.header('auth-token', token).send({'auth-token': token});
    },
}
