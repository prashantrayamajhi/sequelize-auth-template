// import important parts of sequelize library
const { DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("./../db/db");

const Product = sequelize.define("product", {
  // define an id column
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // define product_name column
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // define price column
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  // define stock column
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: {
      isNumeric: true,
    },
  },

  sale: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

  discountedPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    validate: {
      isDecimal: true,
    },
  },

  categories: {
    // array of category ids
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
    validate: {
      isArray: true,
    },
    references: {
      model: "category",
      key: "id",
    },
  },

  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: [],
  },

  public_keys: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: [],
  },
});

module.exports = Product;
