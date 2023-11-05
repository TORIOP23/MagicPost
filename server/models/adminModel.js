const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
      // define association here
      Admin.hasOne(models.Collection, { foreignKey: 'admin_id' });
      Admin.hasOne(models.Transaction, { foreignKey: 'admin_id' });
    }
  };

  Admin.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    role: {
      type: DataTypes.ENUM('ADMIN', 'TRANSACTION_ADMIN', 'COLLECTION_ADMIN'),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      }
    }
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'admin', // We need to choose the model name
    timestamps: false // Don't add the timestamp attributes (updatedAt, createdAt)
  });
  return Admin;
}