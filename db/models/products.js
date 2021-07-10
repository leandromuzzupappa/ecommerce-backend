module.exports = (sequelize, DataTypes) => {
    const tableName = "products";
    const tableData = {
        name: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        priceSpecial: {
            type: DataTypes.INTEGER,
        },
        image: {
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
    };
    const config = {
        timestamps: false,
    };

    return sequelize.define(tableName, tableData, config);
};
