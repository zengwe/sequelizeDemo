var Sequelize = require('sequelize');
var db = require("./init");
let Group = db.define('group',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
},{});
module.exports = Group;