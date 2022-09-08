"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post);
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: { notNull: { msg: "名前は必ず入力してください" } },
      },
      email: {
        type: DataTypes.STRING,
        validate: { notNull: { msg: "メールアドレスは必ず入力してください" } },
      },
      password: {
        type: DataTypes.STRING,
        validate: { notNull: { msg: "パスワードは必ず入力してください" } },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
