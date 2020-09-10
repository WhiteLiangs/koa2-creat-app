module.exports = function (sequelize, DataTypes) {
    return sequelize.define('author', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        role_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        resource_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    },
        {
            timestamps: false,
            tableName: 'auth'//指定表名
        })

}
