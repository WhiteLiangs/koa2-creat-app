module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_role', {
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
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    },
        {
            timestamps: false,
            tableName: 'user_role'//指定表名
        });

}
