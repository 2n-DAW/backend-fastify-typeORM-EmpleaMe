import { FastifyInstance } from "fastify";
import { userLogin, userRegister } from "./userRecruiter.controller";

export default async function userRercruiterRoutes(routes: FastifyInstance) {
    routes.post("/user", userRegister);
    routes.post("/user/login", userLogin);
}

