const Joi = require('joi');

const updateUserSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const validationError = (user) => updateUserSchema.validate(user).error;

module.exports = {
  updateUserValidation: (user) =>
    (validationError(user) ? validationError(user).details[0] : null),
};
