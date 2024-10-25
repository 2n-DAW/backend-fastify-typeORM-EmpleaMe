import { UsersRecruiter } from '../shared/entities/userRecruiter.entity';
import { AppDataSource } from '../data-source';

export const userRecruiterRegisterRepo = async (username: string, password: string, email: string): Promise<UsersRecruiter> => {
    const user = new UsersRecruiter();
    user.username = username;
    user.password = password;
    user.email = email;
    user.company = '';
    user.favouriteJobs = [];
    user.followingUsers = [];
    user.image = '';
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.bio = '';

    const resp = await AppDataSource.getMongoRepository(UsersRecruiter).save(user);
    return resp;
};
