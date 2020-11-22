const {Model, DataTypes} = require ('sequelize');
const sequelize = require ('../database');

class Argonaute extends Model {};

Argonaute.init(
    {
        name: DataTypes.TEXT
    },
    {
        sequelize,
        tableName: 'argonaute'
    }
);

module.exports = Argonaute;