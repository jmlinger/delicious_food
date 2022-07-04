const { StatusCodes } = require('http-status-codes');
const { Sequelize } = require('../../database/models');
const Models = require('../../database/models');

const { Op } = Sequelize;

// eslint-disable-next-line max-lines-per-function
module.exports = async (search = '') => {
  const restaurantsByName = await Models.restaurants.findAll({
    where: {
      name: {
        [Op.like]: `%${search}%`,
      },
    },
  });

  if (restaurantsByName.length !== 0) {
    return { status: StatusCodes.CREATED, message: { restaurants: restaurantsByName } };
  } 

  const restaurantsByMenus = await Models.restaurants.findAll({
    include: [
      {
        model: Models.menus,
        as: 'menu',
        attributes: { exclude: ['restaurantId'] },
        where: {
          [Op.or]: [
            {
              name: { 
                [Op.like]: `%${search}%`,
              },
            },
            {
              description: { 
                [Op.like]: `%${search}%`,
              },
            },
          ],
        },
      },
    ],
  });

  return { status: StatusCodes.CREATED, message: { restaurants: restaurantsByMenus } };
};
