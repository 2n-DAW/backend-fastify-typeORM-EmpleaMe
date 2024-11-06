import { UsersRecruiter } from "../shared/entities/userRecruiter.entity";

export const userRecruiterViewer = (user: UsersRecruiter) => {
    const userView = {
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            image: user.image,
        },
        type: "recruiter"
    };
    return userView;
}

export const userRecruiterLoginViewer = (user: UsersRecruiter, token: string) => {
    const userView = {
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            image: user.image,
            company: user.company,
            token: token,
        },
    };
    return userView;
}