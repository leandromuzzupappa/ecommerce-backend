module.exports = (sequelize, DataTypes) => {
    "products",
        {
            id: {
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
            },
            price: {
                type: DataTypes.INTEGER,
            },
            priceSpecial: {
                type: DataTypes.INTEGER,
            },
            images: {
                type: DataTypes.STRING,
            },
            isActive: {
                type: DataTypes.INTEGER,
            },
            stock: {
                type: DataTypes.INTEGER,
            },
            categoriesId: {
                type: DataTypes.INTEGER,
            },
        },
        {};
};
