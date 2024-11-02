import { AppDataSource } from '../data-source';
import { Inscription } from '../shared/entities/inscription.entity';

export const inscriptionUpdateRepo = async (user_email: string, job: string, status: number): Promise<Inscription | null> => {
    const inscriptionRepository = AppDataSource.getMongoRepository(Inscription);

    const result = await inscriptionRepository.findOneAndUpdate(
        { user_email, job },
        { $set: { status } },
        { returnDocument: 'after' }
    );

    if (!result) return null;

    return result.value;
};


export const inscriptionListRepo = async (): Promise<Inscription[] | null> => {
    const inscriptionRepository = AppDataSource.getMongoRepository(Inscription);

    const result = await inscriptionRepository.find();

    if (!result) return null;

    return result;
};