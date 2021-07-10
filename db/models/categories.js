module.exports = (sequelize, dataTypes) => {
    const tableName = "categories";
    const tableData = {
        name: {
            type: dataTypes.STRING,
        },
    };
    const config = {
        timestamps: false,
    };

    return sequelize.define(tableName, tableData, config);
};
