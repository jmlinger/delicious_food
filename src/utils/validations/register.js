const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const validationError = (user) => registerSchema.validate(user).error;

module.exports = {
  registerValidation: (user) =>
    (validationError(user) ? validationError(user).details[0] : null),
};
