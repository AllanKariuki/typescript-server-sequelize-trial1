import {sequelize} from "../config/db";
import {Model, DataTypes, InferAttributes, InferCreationAttributes} from "sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public password!: string;
}

User.init(
{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        sequelize,
        tableName: "users"
    }
);

export default User;

