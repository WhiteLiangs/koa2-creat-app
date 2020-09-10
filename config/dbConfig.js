var Sequelize = require("sequelize")
var sequelize = new Sequelize('node_user','root','',{
    host:'localhost',
    dialect:'mysql',
    operatorsAliases:false,
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        collate:'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区
});

//测试连接
sequelize.authenticate().then(() => {
    // 连接成功
    console.log('数据库链接成功！')
}).catch(err => {
    //在这里可以添加邮箱通知
});

module.exports = {
    sequelize
};
