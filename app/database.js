require('dotenv').config();

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.PG_URL,
    {
        define: {
            underscore: true,
            timestamps: false
        }
    },

);

module.exports = sequelize;