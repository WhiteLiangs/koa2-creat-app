/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    freezeTableName:true, //设置为true时，sequelize不会改变表名，否则可能会按其规则有所调整
    tableName: 'user' //若表已经创建，则指定表名，不指定则会创建一个带S的表
  })
}
