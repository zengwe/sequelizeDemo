let Sequelize = require('sequelize');
let db = require("./init");
let MD5 = require('crypto').createHash('md5');
let InfoModel = require('./info');
let User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        unique: true,
        autoIncrement: true //没有这个时插入返回是id是null
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        //allowNull: false,
        defaultValue: '123456',
        set(val) {
            return MD5.update(val).digest('hex');
        }
    },
    infoId: {
        type: Sequelize.INTEGER,
        field:'info_id',
        references: {
            model: InfoModel,
            key: 'id'
        }
    },
    age: {
        type: Sequelize.INTEGER,
        validate: {
            max: {
                args: 100,
                msg: "age is larger"
            },
            min: {
                args: 1, // 不能为0 
                msg: 'age is small'
            },
            customFunc(val){
                if(val===50){
                    console.log('dddd');
                    //error中的string就相当于min中的msg
                    throw new Error('Only even values are allowed!')
                }
            }
        }
    },
    state: {
        type: Sequelize.ENUM,
        values: [0,1,2,3,4,5]
    }
}, {
        freezeTableName: true, // Model 对应的表名将与model名相同
        tableName: 'test_user',
        setterMethods:{
            changeName(val){
                return this.setDataValue('username', val.slice(0, -1));
            }
        },
        getterMethods:{
            changeName(){
                return this.username+'changeName';
            }
        },
        // createdAt: 'createdAt',
        // updatedAt: 'updateAt',
        timestamps: true,
        underscored: true, // createdAt&updatedAt=>created_at&update_at
    });
module.exports = User;