var Sequelize = require('sequelize');
var db = require("./init");
let GroupPermission = db.define('GroupPermission',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    groupId: {
        type: Sequelize.INTEGER,
        field: 'group_id'
    },
    permissionId: {
        type: Sequelize.INTEGER,
        field: 'permission_id'
    }
},{
    freezeTableName: true,
    tableName: 'test_group_permission'
});
module.exports = GroupPermission;