//Interfaces
import { FastifyInstance } from "fastify";


//Controllers
import { inscriptionUpdate, inscriptionList } from "./inscription.controller";


const userRercruiterRoutes = (routes: FastifyInstance): void => {
    routes.put("/inscription", inscriptionUpdate);
    routes.get("/inscription", inscriptionList);
}

export default userRercruiterRoutes;

