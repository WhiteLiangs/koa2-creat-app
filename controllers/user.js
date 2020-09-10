const userModel = require('../modules/user')
const jwt = require('jsonwebtoken')
const secret = require('../config/secret')
const bcrypt = require('bcryptjs')
const util = require('util')
const verify = util.promisify(jwt.verify)

class UserController {
  /**
   * 登录
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async postLogin (ctx) {
    const data = ctx.request.body
    const user = await userModel.findUserByName(data.name)  // 查询用户
    // 判断用户是否存在
    if (user) {
      // 判断前端传递的用户密码是否与数据库密码一致
      if (bcrypt.compareSync(data.password, user.password)) {
        // 用户token
        const userToken = {
          name: user.name,
          id: user.id
        }
        console.log(secret)
        const token = jwt.sign(userToken, secret, {expiresIn: '1h'})  // 签发token
        ctx.body = {
          message: '成功',
          bean: {
            token
          },
          code: 1
        }
      } else {
        ctx.body = {
          code: -1,
          message: '用户名或密码错误'
        }
      }
    } else {
      ctx.body = {
        code: -1,
        message: '用户名不存在'
      }
    }
  }

  /**
   * 创建用户
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async createUser (ctx) {
    const user = ctx.request.body
    if (user.password && user.name) {
      const existUser = await userModel.findUserByName(user.name)
      if (existUser) {
        ctx.body = {
          code: -1,
          message: '用户名已经存在'
        }
      } else {
        // 密码加密
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
        await userModel.createUser(user)
        const newUser = await userModel.findUserByName(user.name)

        // 签发token
        const userToken = {
          name: newUser.name,
          id: newUser.id
        }
        const token = jwt.sign(userToken, secret, {expiresIn: '1h'})

        ctx.body = {
          code: 1,
          message: '创建成功',
          bean: {
            token
          }
        }
      }
    } else {
      ctx.body = {
        code: -1,
        message: '参数错误'
      }
    }
  }

  /**
   * 获取用户信息
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async getUserName (ctx) {
    const token = ctx.header.authorization  // 获取jwt
    if(token) {
      let payload
      try {
        payload =await verify(token.split(' ')[1], secret)  // 解密payload，获取用户名和ID
        ctx.user = {
          name: payload.name,
          id: payload.id
        }
      } catch (err) {
        console.log('token verify fail: ', err)
      }
    }

    console.log(ctx.user, 'll')
      const user = ctx.user
    if (user) {
      ctx.body = {
        code: 1,
        message: '成功',
        user
      }
    } else {
      ctx.body = {
        code: -1,
        message: '获取用户信息失败'
      }
    }

  }

  /**
   * 获取用户权限
   * */
  static async getUserRole (ctx) {
    console.log(ctx, 'dddd')
    const token = ctx.header.authorization  // 获取jwt
    if(token) {
      let payload
      try {
        payload =await verify(token.split(' ')[1], secret)  // 解密payload，获取用户名和ID
        ctx.user = {
          name: payload.name,
          id: payload.id
        }
      } catch (err) {
        console.log('token verify fail: ', err)
      }
    }
    const user = ctx.user
    const existUser = await userModel.findUserByRole(user.id)
    console.log(existUser, 'nnnnnnnn')
    if (user_role) {
      ctx.body = {
        code: 1,
        message: '获取用户权限成功',
        user
      }
    } else {
      ctx.body = {
        code: -1,
        message: '获取用户权限失败'
      }
    }
  }

}




module.exports = UserController

