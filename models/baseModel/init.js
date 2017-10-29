let Sequelize = require('sequelize');
let mysqlCfg = require('../../config/config').mysql;
let sequelize = new Sequelize(mysqlCfg.database, mysqlCfg.username, mysqlCfg.password, {
    host: mysqlCfg.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
},{
    // engine:'', // 定义引擎，
    // comment: '', //备注
});
module.exports = sequelize;
