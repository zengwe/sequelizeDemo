let baseUserModel = require('./baseModel/user');
class UserModel {
    static getModel() {
        return baseUserModel;
    }
}
module.exports = UserModel;