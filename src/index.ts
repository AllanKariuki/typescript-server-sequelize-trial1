import express, {Request, Response} from 'express';
import usersRouter from './routes/usersRouter';
import {sequelize} from "./config/db";
import db from "./models";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
    response.send("Hello World");
})

app.use("/", usersRouter);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();
    console.log('All models were synchronized successfully.');

    app.listen((PORT), () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();

