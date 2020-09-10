module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role', {
        role_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        remark: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
        {
            timestamps: false,
            tableName: 'role'//指定表名
        })

}
