module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        role_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        first_name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        last_name : {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        birth : {
            type: DataTypes.DATE,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue : 'user-default.png'
        },
        phone : {
            type: DataTypes.STRING(50),
            allowNull: false
        },      
        address : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        cp : {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        city : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        created_at : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : Date.now
        },
        updated_at : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : Date.now
        },
    },
    {
        timestamps: true,
        underscored: false,
    });

    User.associate = (models) =>{
        User.belongsTo(models.Role, {
            as: "roles",
            foreignKey: "role_id"
        })
    }

    return User;
};