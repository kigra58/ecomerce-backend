import Joi from 'joi';

export const signup=Joi.object({
    firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
});

