import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";

// Create an instance of user service
const userService = new UserService();

// Create a class to map user route methods
export class UserController {
    signUp(req: Request, res: Response) {
        if (req.body.username && req.body.password) {
            return userService.signUp(<string>req.body.username, <string>req.body.password, res);
        };
    };

    login(req: Request, res: Response) {
        const username = <string|undefined>req.body.username;
        const password = <string|undefined>req.body.password;
        if (username && password) {
            return userService.login(<string>username, <string>password, res);
        };
    };
};