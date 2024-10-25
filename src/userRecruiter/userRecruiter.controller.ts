import { FastifyReply, FastifyRequest } from "fastify";
import { userRecruiterRegisterService } from "./userRecruiter.service";

export const userRegister = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    try {
        const { status, result } = await userRecruiterRegisterService(request);
        return reply.code(status).send(result);
    } catch (error) {
        reply.code(500).send({ error: "Ocurrió un error" });
    }
};
