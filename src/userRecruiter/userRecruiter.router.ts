import { FastifyInstance, FastifyRequest } from "fastify";
import { userRegister } from "./userRecruiter.controller";

export default async function userRercruiterRoutes(routes: FastifyInstance) {
    routes.post("/user", userRegister);
}
