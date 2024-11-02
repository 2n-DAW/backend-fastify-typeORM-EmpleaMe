import { ObjectId } from "typeorm";

export interface IUserRecruiter {
    _id: ObjectId;
    userId: ObjectId;
    company: string;
    createdAt: Date;
    email: string;
    favouriteJobs: string[];
    followingUsers: string[];
    image?: string;
    password: string;
    updatedAt: Date;
    username: string;
    bio?: string;
}

