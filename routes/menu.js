/*
 * @Author: your name
 * @Date: 2020-07-09 10:39:14
 * @LastEditTime: 2020-08-25 21:35:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webnode\routes\menu.js
 */
const Router = require('koa-router');
const menuController = require('../controllers/menu')

const router = new Router({
    prefix: '/api'
});

//获取操作目录
router.post('/menu', menuController.getMenuList)


module.exports = router;

