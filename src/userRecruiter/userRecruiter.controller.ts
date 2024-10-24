import { FastifyRequest, FastifyReply } from 'fastify';


export const userRegister = async (request: FastifyRequest, reply: FastifyReply) => {
    try {

    } catch (error) {
        reply.code(500).send({ error: "Ocurrió un error" });
    }
};