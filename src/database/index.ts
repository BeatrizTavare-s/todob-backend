import { Sequelize, DataType } from "sequelize/types";

const Sequelize = require("sequelize");
class MyModel extends Sequelize.Model {
  static init(sequelize : Sequelize, DataTypes:DataType) {
    return super.init(
      {
        myField: DataTypes.toString
      },
      { sequelize }
    );
  }
}