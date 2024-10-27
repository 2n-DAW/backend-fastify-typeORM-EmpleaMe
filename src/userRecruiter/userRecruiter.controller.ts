//Interfaces
import { FastifyReply, FastifyRequest } from "fastify";
import { IMiddlewareRequest } from "../shared/interfaces/middlewareRequest.inerface";

//Services
import { userRecruiterRegisterService, userRecruiterLoginService, getCurrentUserService } from "./userRecruiter.service";


export const userRegister = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const { status, result } = await userRecruiterRegisterService(request);
        return reply.code(status).send(result);
    } catch (error) {
        return reply.code(500).send({ error: "Ocurrió un error" });
    }
};

export const userLogin = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const { status, result } = await userRecruiterLoginService(request);
        return reply.code(status).send(result);
    } catch (error) {
        return reply.code(500).send({ error: "Ocurrió un error" });
    }
};


export const getCurrentUser = async (request: IMiddlewareRequest, reply: FastifyReply): Promise<void> => {
    try {
        const { status, result } = await getCurrentUserService(request);
        return reply.code(status).send(result);
    } catch (error) {
        return reply.code(500).send({ error: "Ocurrió un error" });
    }
};
