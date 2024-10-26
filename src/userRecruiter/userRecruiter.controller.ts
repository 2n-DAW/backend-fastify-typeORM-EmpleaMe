import { FastifyReply, FastifyRequest } from "fastify";
import { userRecruiterRegisterService, userRecruiterLoginService } from "./userRecruiter.service";

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
        console.log("userLogin");
        const { status, result } = await userRecruiterLoginService(request);
        console.log(result);

        return reply.code(status).send(result);
    } catch (error) {
        return reply.code(500).send({ error: "Ocurrió un error" });
    }
};
