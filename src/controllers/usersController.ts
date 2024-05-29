import { Request, Response} from "express";
import User from "../models/userModel";
import { UserInput, UserOutput } from "../types";

const createUsers = async (request: Request< {}, {}, UserInput>, response:Response) => {
    const data = request.body;
    try {
        const user = await User.create(data) as UserOutput;
        return response.status(201).json(user);
    } catch (error) {
        console.log(error);
        return response.status(400).send({message: "An error occured", error: error})
    }
}

export default {
    createUsers
}