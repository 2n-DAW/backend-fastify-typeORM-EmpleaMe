//Interfaces
import { FastifyReply, FastifyRequest } from "fastify";

//Services
import { inscriptionUpdateService, inscriptionlistService } from "./inscription.service";


export const inscriptionUpdate = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const { status, result } = await inscriptionUpdateService(request);
        return reply.code(status).send(result);
    } catch (error) {
        console.log(error);
        return reply.code(500).send({ error: "Ocurrió un error" });
    }
};

export const inscriptionList = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const { status, result } = await inscriptionlistService(request);
        return reply.code(status).send(result);
    } catch (error) {
        return reply.code(500).send({ error: "Ocurrió un error" });
    }
}