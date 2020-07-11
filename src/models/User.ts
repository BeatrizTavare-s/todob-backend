import Sequelize from 'sequelize';
import configDatabase from '../config/database'
const sequelize = new Sequelize(configDatabase);

interface UserAttributes{
    id: number;
    name: string;
    email: string;
}