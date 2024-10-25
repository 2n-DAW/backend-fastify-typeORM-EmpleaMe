import { resp } from "../shared/utils/utils";
import bcrypt from 'bcrypt';

import { userRecruiterRegisterRepo } from "./userRecruiter.repo";
import { userRecruiterViewer } from "./userRecruiter.view";
import { IResp } from "../shared/interfaces/respUtils.interface";
import { FastifyRequest } from "fastify";
import { IUserRecruiter } from "./dto/userRecruiter.interface";
import { IUserRecruiterRequest } from "./dto/userRecruiterRequest.interface";

export const userRecruiterRegisterService = async (data: FastifyRequest): Promise<IResp> => {
    const { email, username, password } = (data.body as IUserRecruiterRequest).user;
    if (!email || !username || !password) return resp(400, { message: "Todos los campos son necesarios" });
    const hashed_password = await bcrypt.hash(password, 10);
    const user_repo = await userRecruiterRegisterRepo(username, hashed_password, email);
    if (!user_repo) return resp(500, { message: "Ocurrió un error" });
    const user_view = await userRecruiterViewer(user_repo);
    return resp(200, user_view);
};