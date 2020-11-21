const sequelize = require ('../database');
const {DataTypes, Model} = require ('sequelize');

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