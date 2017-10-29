var Sequelize = require('sequelize');
var db = require("./init");
let Info = db.define('info',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gender: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.INTEGER
    }
},{
    freezeTableName: true,
    tableName: 'test_info'
});
module.exports = Info;
