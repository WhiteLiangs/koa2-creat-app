/*
 * @Author: your name
 * @Date: 2020-07-08 21:58:05
 * @LastEditTime: 2020-08-25 21:24:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webnode\app.js
 */
const Koa = require('koa');
const app = new Koa();
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// const koajwt = require('koa-jwt')
// const secret = require('./config/secret')
// const err = require('./middlreware/error')
const menu = require('./routes/menu')

//中间件，每次前端请求都需要验证token
// app.use(err())
// error handler
onerror(app)

const cors = require('koa-cors')
app.use(cors())
// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
// app.use(async (ctx, next) => {
//   // console.log(ctx)
//   return next().catch((err) => {
//     if(err.status === 401){
//       ctx.status = 401;
//       ctx.body = {
//         code: '-2000',
//         desc: '登陆过期，请重新登陆'
//       };
//     }else{
//       throw err;
//     }
//   })
// })

//此方法比较复杂，换成另外一种
// app.use(koajwt({
//   secret: secret
// }).unless({
//   path: [/^\/user\/regist/,/^\/user\/login/,/^\/menu\/menu/]
// }))

// routes
app.use(menu.routes()).use(menu.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(3001)
module.exports = app
