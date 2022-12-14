const Joi = require('joi');

const minCharacterName = 3;
const minCaracterPassword = 6;
const minCaracterAddress = 10;

const loginSchema = Joi.object({
  // tlds precisa ser setado como falso para não quebrar a página. Referêcia: https://github.com/sideway/joi/issues/2390.
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(minCaracterPassword).required()
});

const registerSchema = Joi.object({
  name: Joi.string().min(minCharacterName).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  address: Joi.string().min(minCaracterAddress).required(),
  password: Joi.string().min(minCaracterPassword).required()
});

const updateUserSchema = Joi.object({
  name: Joi.string().allow('').required().min(minCharacterName),
  email: Joi.string()
    .allow('')
    .email({ tlds: { allow: false } })
    .required(),
  address: Joi.string().allow('').min(minCaracterAddress).required(),
  password: Joi.string().allow('').min(minCaracterPassword).required()
});

module.exports = {
  loginValidation: (login) => loginSchema.validate(login),
  registerValidation: (register) => registerSchema.validate(register),
  updateUserValidation: (user) => updateUserSchema.validate(user)
};
