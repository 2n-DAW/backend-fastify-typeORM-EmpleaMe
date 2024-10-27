import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

interface CustomRequest extends FastifyRequest {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

const verifyJWT = async (req: CustomRequest, reply: FastifyReply) => {
    const authHeader = req.headers.authorization;

    console.log('NoOptional', authHeader);

    if (!authHeader || !authHeader.startsWith('Token ')) {
        return reply.status(401).send({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

        req.userId = decoded.user.id;
        req.userEmail = decoded.user.email;
        req.userHashedPwd = decoded.user.password;
    } catch (err) {
        return reply.status(403).send({ message: 'Forbidden' });
    }
};

export default verifyJWT;
