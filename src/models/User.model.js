const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
  'User',
  {
    id:{
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,        
    },
    name:{
        type: DataTypes.STRING(15),
        allowNull:false,
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password:{
        type: DataTypes.
    }
  },
  {
    // Other model options go here
  },
);