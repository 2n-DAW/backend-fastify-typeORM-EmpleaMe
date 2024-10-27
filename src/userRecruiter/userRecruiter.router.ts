//Interfaces
import { FastifyInstance } from "fastify";

//Middlewares
import verifyJWT from "../shared/middlewares/verifyJWT";

//Controllers
import { userLogin, userRegister, getCurrentUser } from "./userRecruiter.controller";


export default async function userRercruiterRoutes(routes: FastifyInstance) {
    routes.post("/user", userRegister);
    routes.post("/user/login", userLogin);
    routes.get("/user", { preHandler: verifyJWT }, getCurrentUser);
}

