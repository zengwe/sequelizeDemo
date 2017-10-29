var Sequelize = require('sequelize');
var db = require("./init");
let UserGroup = db.define('UserGroup',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    groupId:{
        type: Sequelize.INTEGER,
        field: 'group_id'
    }
},{
    freezeTableName:true,
    tableName:'test_user_group'
});
module.exports = UserGroup;