import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

interface CustomRequest extends FastifyRequest {
    loggedin?: boolean;
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

const verifyJWTOptional = async (req: CustomRequest, reply: FastifyReply) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Token ') || !authHeader.split(' ')[1].length) {
        req.loggedin = false;
        return;
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as any;

        req.loggedin = true;
        req.userId = decoded.user.id;
        req.userEmail = decoded.user.email;
        req.userHashedPwd = decoded.user.password;
    } catch (err) {
        reply.status(403).send({ message: 'Forbidden' });
    }
};

export default verifyJWTOptional;
