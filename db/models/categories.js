module.exports = (sequelize, dataTypes) => {
    return sequelize.define(
        "categories",
        {
            name: {
                type: dataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    );
};
