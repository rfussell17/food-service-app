const Joi = require('joi');
const { number } = require('joi');

module.exports.orderSchema = Joi.object({
    order: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required().min(0),
        // image: Joi.string().required(),
        isStarted: false ,
        cookTime: number().required(),
        startTime: number().required(),
        elapsedTime: number().required()
   
    }).required(),

});
