const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

// eslint-disable-next-line max-lines-per-function
module.exports = async (restaurantId, userId) => {
  let restaurantsById = await Models.restaurants.findByPk(restaurantId, {
    include: [
      {
        model: Models.users,
        as: 'favUsers',
        attributes: { exclude: ['name', 'email', 'address', 'password'] },
        through: { attributes: [] },
      },
      {
        model: Models.menus,
        as: 'menu',
        attributes: { exclude: ['restaurantId'] },
      },
    ],
  });

  restaurantsById = { 
    ...restaurantsById.dataValues,
    favUsers: restaurantsById.dataValues.favUsers.some(({ id }) => id === Number(userId)),
  };

  return { status: StatusCodes.CREATED, message: { restaurant: restaurantsById } };
};
