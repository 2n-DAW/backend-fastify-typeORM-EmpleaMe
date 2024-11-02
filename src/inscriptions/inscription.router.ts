//Interfaces
import { FastifyInstance } from "fastify";

//Middlewares
import verifyJWT from "../shared/middlewares/verifyJWT";

//Controllers
import { inscriptionUpdate } from "./inscription.controller";


const userRercruiterRoutes = (routes: FastifyInstance): void => {
    routes.put("/inscription", inscriptionUpdate);
}

export default userRercruiterRoutes;

