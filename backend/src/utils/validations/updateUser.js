const Joi = require('joi');

const updateUserSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().allow('').required().min(3),
  email: Joi.string().allow('').email().required(),
  address: Joi.string().allow('').required().min(10),
  password: Joi.string().allow('').required().min(6),
});

const validationError = (user) => updateUserSchema.validate(user).error;

module.exports = {
  updateUserValidation: (user) =>
    (validationError(user) ? validationError(user).details[0] : null),
};
