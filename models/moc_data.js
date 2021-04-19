"use strict";
module.exports = (sequelize, DataTypes) => {
  const moc_data = sequelize.define("moc_data", {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    phdata: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    ecdata: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tempdata: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
  });

  return moc_data;
};
