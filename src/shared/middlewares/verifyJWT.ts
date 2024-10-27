import { FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';
import { IMiddlewareRequest } from '../interfaces/middlewareRequest.inerface';


const verifyJWT = async (request: IMiddlewareRequest, reply: FastifyReply) => {
    const authHeader = request.headers.authorization;

    console.log('NoOptional', authHeader);

    if (!authHeader || !authHeader.startsWith('Token ')) {
        return reply.status(401).send({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

        request.userId = decoded.user.id || '';
        request.userEmail = decoded.user.email || '';
        request.userHashedPwd = decoded.user.password || '';
    } catch (err) {
        return reply.status(403).send({ message: 'Forbidden' });
    }
};

export default verifyJWT;
