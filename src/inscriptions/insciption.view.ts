import { Inscription } from "../shared/entities/inscription.entity";

export const inscriptionViewer = (user: Inscription) => {
    const insciptionView = {
        inscription: {
            user_email: user.user_email,
            job: user.job,
            status: user.status,
        },
    };
    return insciptionView;
}