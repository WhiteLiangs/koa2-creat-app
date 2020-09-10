const db = require('../config/dbConfig')
//引入sequelize对象
const Sequelize = db.sequelize
const User = Sequelize.import('../schema/user.js')


User.sync({ force: false });
// User_role.sync({ force: true });

class UserModel {
  /**
   * 查询用户信息
   * @param name  姓名
   * @returns {Promise.<*>}
   */
  static async findUserByName (name) {
    const userInfo = await User.findAll({
      where: {
        name
      },
      raw: false
    })
    return userInfo[0]
  }

  /**
   * 查询用户权限信息
   *
   * */
  static async findUserByRole(id){
      User.belongsTo(User_role, {foreignKey:'id', targetKey:'user_id'})
      const userRole = await User_role.findAll({
        where: {
          id
        }
      })

    console.log(userRole)
    return userRole[0]

  }

  /**
   * 创建用户
   * @param user
   * @returns {Promise.<boolean>}
   */
  static async createUser (user) {
    await User.create({
      'name': user.name,
      'password': user.password
    })
    return true
  }
}

module.exports = UserModel
