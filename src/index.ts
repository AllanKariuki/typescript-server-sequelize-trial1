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

sequelize.sync().then(() => {
     app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
}).catch((error: Error) => {
    console.log('Unable to connect the database', error);
});
