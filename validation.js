//VALIDATION
const Joi = require('@hapi/joi');

//Register validation

const registeredValidation = (data) =>{
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });
    return schema.validate(data)
}
const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });

    return schema.validate(data)
}


module.exports.registeredValidation = registeredValidation;
module.exports.loginValidation = loginValidation
