const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (id) => {
  const restaurantsById = await Models.restaurants.findByPk(id, {
    include: [
      {
        model: Models.menus,
        as: 'menu',
        attributes: { exclude: ['restaurantId'] },
      },
    ],
  });

  return { status: StatusCodes.CREATED, message: { restaurant: restaurantsById } };
};
