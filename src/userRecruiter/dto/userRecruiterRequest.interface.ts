import { ObjectId } from "typeorm";
import { IUserRecruiter } from "./userRecruiter.interface";

export interface IUserRecruiterRequest {
    user: IUserRecruiter;
}

