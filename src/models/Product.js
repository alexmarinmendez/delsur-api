const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('product', {    
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    sales: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  });
};
