import { FastifyRequest } from "fastify";


export interface IMiddlewareRequest extends FastifyRequest {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
    loggedin?: boolean;
}