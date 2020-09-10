const MenuModel = require('../modules/menu')

class MenuController {

    /**
     * 获取menuList
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getMenuList (ctx) {
        const data = ctx.request.query
        if (data) {
            const menu = await MenuModel.getmenuList()
            ctx.body = {
                code: 0,
                data: {
                    menu: menu
                },
                message: '成功'
            }
        } else {
            ctx.body = {
                code: -1,
                message: '参数错误'
            }
        }
    }

}

module.exports = MenuController