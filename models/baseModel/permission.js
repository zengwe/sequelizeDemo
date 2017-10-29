var Sequelize = require('sequelize');
var db = require("./init");
let Permission = db.define('permission',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
    tableName: 'test_permission'
});
module.exports = Permission;
