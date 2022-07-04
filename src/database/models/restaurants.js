module.exports = (sequelize, DataTypes) => {
  const restaurants = sequelize.define('restaurants', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    rating: DataTypes.DECIMAL(9, 1),
  }, 
  { timestamps: false, tableName: 'restaurants', underscored: true });

  restaurants.associate = (models) => {
    restaurants.hasMany(models.menus,
      { foreignKey: 'restaurantId', as: 'menu' });
  };

  return restaurants;
};