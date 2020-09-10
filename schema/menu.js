module.exports = function (sequelize, DataTypes) {
    return sequelize.define('menu', {
        id: {
            type: DataTypes.INTEGER(24),
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
        },
      
        menu: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
            path: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            key: {
                type: DataTypes.INTEGER(24),
                allowNull: true
            },
    },
        {
            timestamps: false,
            tableName: 'menu'//指定表名
        })

}
