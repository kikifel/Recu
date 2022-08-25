module.exports = (sequelize, DataTypes) =>{

    const Product = sequelize.define('Product', {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        category_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

        name : {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        price : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        specs : {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        image_01 : {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        image_02 : {
            type: DataTypes.STRING(10),
            allowNull: true,
            defaultValue : 'default.webp'
        },
        image_03 : {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        image_04 : {
            type: DataTypes.STRING(10),
            allowNull: true,
            defaultValue : 'default.webp'
        },
        thumb : {
            type: DataTypes.STRING(10),
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

    Product.associate = (models) =>{
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "category_id",
            targetKey: "id"
        })
    }

    return Product;
}