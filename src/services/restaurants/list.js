const { StatusCodes } = require('http-status-codes');
const { Sequelize } = require('../../database/models');
const Models = require('../../database/models');

const { Op } = Sequelize;

function restIsUserFav(restaurants, userId, favOn) {
  const verifiedRest = restaurants.map(({ dataValues }) =>
  ({ ...dataValues, favUsers: dataValues.favUsers.some(({ id }) => id === Number(userId)) }));

  if (favOn === 'true') {
    const userFavRests = verifiedRest.filter(({ favUsers }) => favUsers);
    return userFavRests;
  }
  
  return verifiedRest;
}

// eslint-disable-next-line max-lines-per-function
module.exports = async (query) => {
  const { search, userId, favOn } = query;

  let restaurantsByName = await Models.restaurants.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${search}%`,
          },
        },
        {
          subname: {
            [Op.like]: `%${search}%`,
          },
        },
      ],
    },
    include: [
      {
        model: Models.users,
        as: 'favUsers',
        attributes: { exclude: ['name', 'email', 'address', 'password'] },
        through: { attributes: [] },
      },
    ],
  });

  if (restaurantsByName.length !== 0) {
    restaurantsByName = restIsUserFav(restaurantsByName, userId, favOn);

    return { status: StatusCodes.CREATED, message: { restaurants: restaurantsByName } };
  } 

  let restaurantsByMenus = await Models.restaurants.findAll({
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
  
  restaurantsByMenus = restIsUserFav(restaurantsByMenus, userId, favOn);

  return { status: StatusCodes.CREATED, message: { restaurants: restaurantsByMenus } };
};
