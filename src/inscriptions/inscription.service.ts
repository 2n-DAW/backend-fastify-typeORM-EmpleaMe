//Utils
import bcrypt from 'bcrypt';
import { resp } from "../shared/utils/utils";

//Interfaces
import { FastifyRequest } from "fastify";
import { IResp } from "../shared/interfaces/respUtils.interface";


//Repositories
import { inscriptionUpdateRepo, inscriptionListRepo } from "./inscription.repo";

//Views
import { inscriptionViewer } from "./insciption.view";
import { IInscriptionRequest } from './dto/inscriptionRequest.interface';



export const inscriptionUpdateService = async (data: FastifyRequest): Promise<IResp> => {
    const { status, user_email, job } = (data.body as IInscriptionRequest).inscription;
    if (!status) return resp(400, { message: "Todos los campos son necesarios" });
    const inscription_repo = await inscriptionUpdateRepo(user_email, job, status);
    if (!inscription_repo) return resp(500, { message: "Ocurrió un error" });
    const inscription_view = await inscriptionViewer(inscription_repo);
    return resp(200, inscription_view);
};


export const inscriptionlistService = async (data: FastifyRequest): Promise<IResp> => {
    const inscription_repo = await inscriptionListRepo();
    if (!inscription_repo) return resp(500, { message: "Ocurrió un error" });

    return resp(200, inscription_repo);
}