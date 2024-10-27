//Conexion
import { AppDataSource } from '../data-source';

//Entities
import { UsersRecruiter } from '../shared/entities/userRecruiter.entity';

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

export const userRecruiterSearchRepo = async (email: string): Promise<UsersRecruiter | null> => {
    const user = await AppDataSource.getMongoRepository(UsersRecruiter).findOne({ where: { email } });
    return user;
}
