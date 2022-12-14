module.exports = (sequelize, DataTypes) => {
  const usersRestaurants = sequelize.define('usersRestaurants',
    {},
    { timestamps: false, underscored: true, tableName: 'usersRestaurants' });
  usersRestaurants.associate = (models) => {
    models.users.belongsToMany(models.restaurants, {
      as: 'favRestaurants',
      through: usersRestaurants,
      foreignKey: 'userId',
      otherKey: 'restaurantId',
    });
    models.restaurants.belongsToMany(models.users, {
      as: 'favUsers',
      through: usersRestaurants,
      foreignKey: 'restaurantId',
      otherKey: 'userId',
    });
  };
  return usersRestaurants;
};
