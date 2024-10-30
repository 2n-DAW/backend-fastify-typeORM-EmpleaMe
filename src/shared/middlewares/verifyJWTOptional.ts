import { FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { IMiddlewareRequest } from '../interfaces/middlewareRequest.inerface';
import { IJwtTokenDecode } from '../interfaces/jwtTokenDecode.interface';


const verifyJWTOptional = async (request: IMiddlewareRequest, reply: FastifyReply): Promise<void> => {
    const authHeader = request.headers.authorization;

    if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Token ') || !authHeader.split(' ')[1].length) {
        request.loggedin = false;
        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as IJwtTokenDecode;

        request.loggedin = true;
        request.userId = decoded.user.id || '';
        request.userEmail = decoded.user.email || '';
        request.userHashedPwd = decoded.user.password || '';
    } catch (err) {
        reply.status(403).send({ message: 'Forbidden' });
    }
};

export default verifyJWTOptional;
