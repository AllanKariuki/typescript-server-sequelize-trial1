import { Request, Response} from "express";
import {User} from "../types/userResponse";

const getUsers = (req: Request, res: Response) => {
    res.send([]);
}

const getUsersById = (req: Request, res: Response<User>) => {
    res.send({
        id: 1,
        name: "John Doe",
        email: "allan@email.com",
        role: "admin"
    });
}

export default {
    getUsers,
    getUsersById
}