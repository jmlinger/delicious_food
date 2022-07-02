module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    restaurantId: { type: DataTypes.INTEGER, foreignKey: true },
    name: DataTypes.STRING,
    image: DataTypes.STRING(300),
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL(9, 2),
    category: DataTypes.STRING,
  }, 
  { timestamps: false, tableName: 'menus', underscored: true });

  menus.associate = (models) => {
    menus.belongsTo(models.restaurants,
      { foreignKey: 'restaurantId', as: 'restaurant' });
  };

  return menus;
};