import { Sequelize } from "sequelize";

const DB_NAME = 'compound';
const DB_USER = 'process.env.DB_USER';
const DB_PASSWORD = 'process.env.DB_PASSWORD';
const  DB_HOST = 'localhost';
const  DB_PORT = 8889;




export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: console.log,
  dialectOptions: {
    connectTimeout: 10000,
  },
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(" Database connected successfully!");
  } catch (err: any) {
    console.error(" Unable to connect to the database:", err);
    process.exit(1);
  }
};
