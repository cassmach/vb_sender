"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = {
    up: (queryInterface) => {
        return queryInterface.changeColumn('Whatsapps', 'collectiveVacationMessage', {
            type: sequelize_1.DataTypes.TEXT,
        });
    },
    down: (queryInterface) => {
        return queryInterface.changeColumn('Whatsapps', 'collectiveVacationMessage', {
            type: sequelize_1.DataTypes.STRING,
        });
    }
};
