//Utils
import bcrypt from 'bcrypt';
import jwt = require("jsonwebtoken");
import { resp } from "../shared/utils/utils";

//Interfaces
import { FastifyRequest } from "fastify";
import { IResp } from "../shared/interfaces/respUtils.interface";
import { IUserRecruiterRequest } from "./dto/userRecruiterRequest.interface";
import { IMiddlewareRequest } from "../shared/interfaces/middlewareRequest.inerface";

//Repositories
import { userRecruiterRegisterRepo, userRecruiterSearchRepo } from "./userRecruiter.repo";

//Views
import { userRecruiterViewer, userRecruiterLoginViewer } from "./userRecruiter.view";



export const userRecruiterRegisterService = async (data: FastifyRequest): Promise<IResp> => {
    const { email, username, password, userId } = (data.body as IUserRecruiterRequest).user;
    if (!email || !username || !password || !userId) return resp(400, { message: "Todos los campos son necesarios" });
    const hashed_password = await bcrypt.hash(password, 10);
    const user_repo = await userRecruiterRegisterRepo(username, hashed_password, email, userId);
    if (!user_repo) return resp(500, { message: "Ocurrió un error" });
    const user_view = await userRecruiterViewer(user_repo);
    return resp(200, user_view);
};

export const userRecruiterLoginService = async (data: FastifyRequest): Promise<IResp> => {
    const { email, password } = (data.body as IUserRecruiterRequest).user;
    const user = await userRecruiterSearchRepo(email);
    if (!user) return resp(500, { message: "Usuario inexistente" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return resp(500, { message: "Contraseña incorrecta" });
    if (process.env.JWT_SECRET !== undefined) {
        const token = jwt.sign({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                password: user.password,
                userType: "recruiter"
            }
        },
            process.env.JWT_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
        );
        const authView = userRecruiterLoginViewer(user, token);
        return resp(200, authView);
    } else {
        throw new Error("JWT_SECRET not defined");
    }

}


export const getCurrentUserService = async (data: IMiddlewareRequest): Promise<IResp> => {
    const { userEmail } = data;
    const user = await userRecruiterSearchRepo(userEmail!); //Existirá si o si ya que en este punto ya a passado por el middleware
    if (!user) return resp(500, { message: "Usuario inexistente" });
    const user_view = await userRecruiterViewer(user);
    return resp(200, user_view);
};