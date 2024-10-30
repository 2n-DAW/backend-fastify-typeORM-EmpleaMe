//Interfaces
import { FastifyInstance } from "fastify";

//Middlewares
import verifyJWT from "../shared/middlewares/verifyJWT";

//Controllers
import { userLogin, userRegister, getCurrentUser } from "./userRecruiter.controller";


const userRercruiterRoutes = (routes: FastifyInstance): void => {
    routes.post("/user", userRegister);
    routes.post("/user/login", userLogin);
    routes.get("/user", { preHandler: verifyJWT }, getCurrentUser);
}

export default userRercruiterRoutes;

