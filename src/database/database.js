import  Sequelize  from "sequelize";


export const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/backendprueba')