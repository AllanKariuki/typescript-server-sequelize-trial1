import express, {Request, Response} from 'express';
import usersRouter from './routes/usersRouter';
import {sequelize} from "./config/db";
import "./models/userModel";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
    response.send("Hello World");
})

app.use("/", usersRouter);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch (error => {
    console.error('Unable to connect to the database:', error);
});
