const Router = require('koa-router');
const userController = require('../controllers/user')
const jwt = require('jsonwebtoken')

const router = new Router({
    prefix: '/user'
});

//用户注册
router.post('/regist',userController.createUser)

//密码登陆
router.post('/login',userController.postLogin)

//获取用户信息
router.get('/getUserInfo',userController.getUserName)

//获取用户权限
router.get('/getUserRole',userController.getUserRole)
//退出登录

module.exports = router;

