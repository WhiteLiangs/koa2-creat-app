/*
 * @Author: your name
 * @Date: 2020-07-09 10:13:40
 * @LastEditTime: 2020-08-25 15:54:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webnode\modules\menu.js
 */
const db = require('../config/dbConfig')
//引入sequelize对象
const Sequelize = db.sequelize
const Menu = Sequelize.import('../schema/menu.js')

Menu.sync({ force: true });

class MenuModel {
    /**
     * 获取menuList
     * @param userId  用户ID
     * @returns {Promise.<*>}
     */
    static async getmenuList() {
        const menuList = await Menu.findAll()
        // console.log(menuList)
        return menuList
    }
}

module.exports = MenuModel